import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../Classes/Factures.dart';
import 'ValdRes.dart';

class History extends StatelessWidget {
  const History({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      backgroundColor: Colors.white,

      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.only(left: 8.0,right: 8,top: 30),
          child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
              //  mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: const <Widget>[
                 Text("Latest Factures",style: TextStyle(fontSize: 30),),
                 Spacer(),
                 Icon(Icons.category)

              ],),
            ),
            const SizedBox(height: 20,),
    SizedBox(
      height: 400,
      child: Center(
        child: ListView.builder(
        padding: const EdgeInsets.all(0),
        itemCount: facts.length,
        itemBuilder: (BuildContext context, int index) {
        return
                FlatButton(
                  onPressed: (){

                    showModalBottomSheet<void>(
                      context: context,
                      builder: (BuildContext context) {
                        return Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                             Padding(
                              padding: EdgeInsets.all(10.0),
                              child: Text(facts[index].name,style:TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                            ),
                            const Padding(
                              padding: EdgeInsets.all(10.0),
                              child: const Divider(color: Colors.black,height: 1,),
                            ),
                            Container(
                              height: 300,
                              color: Colors.white,
                              child:  Center(
                                child:  Card(


                                  child: Padding(
                                    padding: const EdgeInsets.all(10.0),
                                    child: Column(
                                    crossAxisAlignment:CrossAxisAlignment.center,
                                      children: <Widget>[
                                    //  const Text("Beni Mouhli",style:TextStyle(fontSize: 35),),
                                        SizedBox(height: 20,),
                                        Row(
                                          mainAxisAlignment:MainAxisAlignment.center,

                                          children: <Widget> [
                                            Text(facts[index].prix,style: TextStyle(fontSize: 35,fontWeight: FontWeight.bold),),
                                            Text("DZA ",style: TextStyle(fontSize: 20,fontWeight: FontWeight.w100,color: Colors.lightBlue),),
                                          ],
                                        ),
                                        SizedBox(height: 20,),

                                        Row(
                                          mainAxisAlignment:MainAxisAlignment.spaceBetween,

                                          children: [

                                            Column(
                                              children: [
                                                Text("StationID ",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                                                Text("st1912 ",style: TextStyle(fontSize: 12,fontWeight: FontWeight.w100),),
                                              ],
                                            ),
                                            Column(
                                              children: [
                                                Text("TransactionID ",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                                                Text("tr123 ",style: TextStyle(fontSize: 12,fontWeight: FontWeight.w100),),
                                              ],
                                            ),
                                            Column(
                                              children: [
                                                Text("UserID ",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                                                Text("youb147 ",style: TextStyle(fontSize: 12,fontWeight: FontWeight.w100),),
                                              ],
                                            ),
                                          ],
                                        ),
                                        SizedBox(height: 20,),

                                        Row(
                                         // crossAxisAlignment: CrossAxisAlignment.,
                        mainAxisAlignment:MainAxisAlignment.spaceBetween,
                                          children: [

                                            Column(
                                              children: [
                                                Text("PumpID ",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                                                Text("12157kz ",style: TextStyle(fontSize: 12,fontWeight: FontWeight.w100),),
                                              ],
                                            ),
                                            Column(
                                              children: [
                                                Text("StationName ",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                                                Text(facts[index].name,style: TextStyle(fontSize: 12,fontWeight: FontWeight.w100),),
                                              ],
                                            ),
                                            Column(
                                              children: [
                                                Text("Litre ",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                                                Text(facts[index].litre,style: TextStyle(fontSize: 12,fontWeight: FontWeight.w100),),
                                              ],
                                            ),
                                          ],
                                        )

                                    ],),
                                  ),

                                ),
                              ),
                            ),


                          ],
                        );
                      },
                    );
                  },
                  child: Card(

                    elevation: 4,
                    shadowColor: Colors.black,
                    child: Padding(
                      padding: const EdgeInsets.only(left: 8,right: 8,top: 20,bottom: 20),
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children:  [
                            Text(facts[index].name,style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                            Text(facts[index].date,style: TextStyle(fontSize: 20,fontWeight: FontWeight.normal,color: Colors.orange),),
                          ],),
                          const SizedBox(height: 20,),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget> [
                              Row(
                                children: <Widget> [
                                  Text(facts[index].prix,style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                                  Text("DZA ",style: TextStyle(fontSize: 15,fontWeight: FontWeight.w100),),
                                ],
                              ),
                              const SizedBox(height: 30,),
                              Row(
                                children: <Widget> [
                                  Text(facts[index].litre,style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                                  Text("Litre ",style: TextStyle(fontSize: 15,fontWeight: FontWeight.w100),),
                                ],
                              ),
                        ],
                      ),
                    ])),





                  ),
                );}
        ),
      ),
    ),
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: Container(child: const Center(child: Text("See More")),
                height: 40,
               // width: 200,
                decoration: const BoxDecoration(
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey,
                      spreadRadius: 2,
                      blurRadius: 2,
                      offset: Offset(0, 2), // changes position of shadow
                    ),
                  ],
                  borderRadius: BorderRadius.all(Radius.circular(10)),
                  color: Colors.white,
                ),
              ),
            ),


            ],),
        ),
      ),
    );
  }
}
