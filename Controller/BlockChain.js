"use strict";
var CryptoJS = require("crypto-js");
var WebSocket = require("ws");
var initialPeers = process.env.PEERS ? process.env.PEERS.split(",") : [];

class Block {
	constructor(index, previousHash, timestamp, Data, hash) {
		this.index = index;
		this.previousHash = previousHash.toString();
		this.timestamp = timestamp;
		this.Data = Data;
		this.hash = hash.toString();
	}
}

var sockets = [];
var MessageType = {
	QUERY_LATEST: 0,
	QUERY_ALL: 1,
	RESPONSE_BLOCKCHAIN: 2,
};

module.exports.getGenesisBlock = () => {
	return new Block(
		0,
		"0",
		1465154705,
		"mon genesis block !",
		"816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7"
	);
};

//var blockchain = [getGenesisBlock()];

module.exports.initConnection = (ws) => {
	sockets.push(ws);
	initMessageHandler(ws);
	initErrorHandler(ws);
	write(ws, queryChainLengthMsg());
};

module.exports.initMessageHandler = (ws) => {
	ws.on("message", (data) => {
		var message = JSON.parse(data);
		console.log("Message Reçu" + JSON.stringify(message));
		switch (message.type) {
			case MessageType.QUERY_LATEST:
				write(ws, responseLatestMsg());
				break;
			case MessageType.QUERY_ALL:
				write(ws, responseChainMsg());
				break;
			case MessageType.RESPONSE_BLOCKCHAIN:
				handleBlockchainResponse(message);
				break;
		}
	});
};

module.exports.initErrorHandler = (ws) => {
	var closeConnection = (ws) => {
		console.log("échec de la connexion au pair : " + ws.url);
		sockets.splice(sockets.indexOf(ws), 1);
	};
	ws.on("close", () => closeConnection(ws));
	ws.on("error", () => closeConnection(ws));
};

module.exports.generateNextBlock = (blockData, block) => {
	var previousBlock = getLatestBlock(block);
	console.log("SIUUUUU blockChain");
	var nextIndex = previousBlock.index + 1;
	console.log("SIUUUUU blockChain2");
	var nextTimestamp = new Date().getTime() / 1000;
	console.log("SIUUUUU blockChain3");
	var nextHash = calculateHash(
		nextIndex,
		previousBlock.hash,
		nextTimestamp,
		blockData
	);
	console.log("SIUUUUU blockChain4");
	return new Block(
		nextIndex,
		previousBlock.hash,
		nextTimestamp,
		blockData,
		nextHash
	);
};

const calculateHashForBlock = (block) => {
	return calculateHash(
		block.index,
		block.previousHash,
		block.timestamp,
		block.data
	);
};

const calculateHash = (index, previousHash, timestamp, data) => {
	return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
};

module.exports.addBlock = (newBlock, block) => {
	console.log("rana hna");
	console.log(isValidNewBlock(newBlock, getLatestBlock(block)));
	if (isValidNewBlock(newBlock, getLatestBlock(block))) {
		block.push(newBlock);
		return block;
	}
};

const isValidNewBlock = (newBlock, previousBlock) => {
	console.log("aaaaaaaaaaaaaaaaaa ", newBlock.index);
	if (previousBlock.index + 1 !== newBlock.index) {
		console.log("index invalide");
		return false;
	} else if (previousBlock.hash !== newBlock.previousHash) {
		console.log("previousHash invalide");
		return false;
	} else if (calculateHashForBlock(newBlock) === newBlock.hash) {
		console.log(
			typeof newBlock.hash + " " + typeof calculateHashForBlock(newBlock)
		);
		console.log(
			"hash invalide: " + calculateHashForBlock(newBlock) + " " + newBlock.hash
		);
		return false;
	}
	return true;
};

module.exports.connectToPeers = (newPeers) => {
	newPeers.forEach((peer) => {
		var ws = new WebSocket(peer);
		ws.on("open", () => initConnection(ws));
		ws.on("error", () => {
			console.log("échec de la connexion");
		});
	});
};

module.exports.handleBlockchainResponse = (message) => {
	var receivedBlocks = JSON.parse(message.data).sort(
		(b1, b2) => b1.index - b2.index
	);
	var latestBlockReceived = receivedBlocks[receivedBlocks.length - 1];
	var latestBlockHeld = getLatestBlock();
	if (latestBlockReceived.index > latestBlockHeld.index) {
		console.log(
			"Dernier block de la blockchain : " +
				latestBlockHeld.index +
				". Block reçu par le pair : " +
				latestBlockReceived.index
		);
		if (latestBlockHeld.hash === latestBlockReceived.previousHash) {
			console.log("Nous pouvons appondre le block reçu à notre chaîne");
			blockchain.push(latestBlockReceived);
			broadcast(responseLatestMsg());
		} else if (receivedBlocks.length === 1) {
			console.log("Nous devons interroger notre chaîne depuis notre pair");
			broadcast(queryAllMsg());
		} else {
			console.log(
				"La blockchain reçue est plus longue que la blockchain actuelle"
			);
			replaceChain(receivedBlocks);
		}
	} else {
		console.log(
			"La blockchain reçue est plus courte que la blockchain actuelle. Ne rien faire."
		);
	}
};

module.exports.replaceChain = (newBlocks) => {
	if (isValidChain(newBlocks) && newBlocks.length > blockchain.length) {
		console.log(
			"La blockchain reçue est valide. Remplacer la blockchain actuelle par la blockchain reçue."
		);
		blockchain = newBlocks;
		broadcast(responseLatestMsg());
	} else {
		console.log("La blockchain reçue est invalide.");
	}
};

module.exports.isValidChain = (blockchainToValidate) => {
	if (
		JSON.stringify(blockchainToValidate[0]) !==
		JSON.stringify(getGenesisBlock())
	) {
		return false;
	}
	var tempBlocks = [blockchainToValidate[0]];
	for (var i = 1; i < blockchainToValidate.length; i++) {
		if (isValidNewBlock(blockchainToValidate[i], tempBlocks[i - 1])) {
			tempBlocks.push(blockchainToValidate[i]);
		} else {
			return false;
		}
	}
	return true;
};

const getLatestBlock = (block) => block[block.length - 1];
module.exports.getBlock = (block, hash) => {
	var f = false;
	var a;
	block.filter((obj) => {
		console.log("obj hash :  ", obj.hash, "   le hash   ", hash);
		if (obj.hash == hash) {
			console.log("dans le if ", obj);
			console.log("-----------");
			console.log("voila   : ", obj.Data.Points);
			console.log("-----------");
			f = true;
			a = obj.Data.Points;
		}
	});
	if (f) return a;
	else return 0;
};

module.exports.queryChainLengthMsg = () => ({ type: MessageType.QUERY_LATEST });
module.exports.queryAllMsg = () => ({ type: MessageType.QUERY_ALL });
module.exports.responseChainMsg = () => ({
	type: MessageType.RESPONSE_BLOCKCHAIN,
	data: JSON.stringify(blockchain),
});
module.exports.responseLatestMsg = () => ({
	type: MessageType.RESPONSE_BLOCKCHAIN,
	data: JSON.stringify([getLatestBlock()]),
});

module.exports.write = (ws, message) => ws.send(JSON.stringify(message));
module.exports.broadcast = (message) =>
	sockets.forEach((socket) => write(socket, message));

module.exports.connectToPeers(initialPeers);
//initHttpServer();
//initP2PServer();
