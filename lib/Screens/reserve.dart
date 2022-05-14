
import 'package:flutter/material.dart';
import 'package:naftal/Screens/ValdRes.dart';
import '../Payment.dart';
import '../Classes/User.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class Reserve extends StatefulWidget {
  final String id;
   Reserve({Key? key, required this.id}) : super(key: key);

  @override
  _ReserveState createState() => _ReserveState();
}

class _ReserveState extends State<Reserve> {
  Reserver (id,quantite,Type,station,pos) async{
    var response=await http.post(
        Uri.parse("https://hackit-naftal.herokuapp.com/Utilisateur/Reservation/CreerReservation?fbclid=IwAR13NLaPfLE9bbQsqZsnreqQNBxlLCfg1WIdPYi-uiMffBvhOL2TDL1DSTs"),
        body:{
          "id_User":id,
          "Quantite":quantite,
          "Type":Type,
          "Station":station,
          "Position":pos
        }

    );
    if (response.statusCode == 201) {
      // If the server did return a 201 CREATED response,
      // then parse the JSON.
      return User.fromJson(jsonDecode(response.body));
    } else {
      // If the server did not return a 201 CREATED response,
      // then throw an exception.
      throw Exception('Failed to create album.');
    }

    print(response.toString());

  }

  TextEditingController adr=TextEditingController();
  TextEditingController dinar=TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white,

        body:SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 20,),

            Image.network("https://www.b2b-algeria.net/file/2020/08/NAFTAL.jpg"),
            Padding(
              padding: const EdgeInsets.all(10.0),
              child: Container(
                decoration: const BoxDecoration(
                  color: Color(0xffCCD4E0),
                  borderRadius: BorderRadius.all(Radius.circular(8)),
                ),

               // height: 200,
                child:Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children:  <Widget> [
                    Padding(

                      padding:  const EdgeInsets.only(left: 20.0,right: 20,top: 20,bottom: 10),
                      child:  Container(
                        decoration: const BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.circular(8)),
                          color: Colors.white,
                        ),
                        child:  TextField(
                             controller: adr,
                          decoration:const InputDecoration(
                              border: OutlineInputBorder(),
                              labelText: 'Your location ',
                             // hintText: 'enter your name'
                          ),
                        ),
                      ),
                    ),
                     Padding(
                      padding: const EdgeInsets.only(left: 20.0,right: 20),
                      child: TextField(
                        controller: dinar,
                        decoration: const InputDecoration(
                            hintText: "Dinar",
                            labelText: "Dza",
                            labelStyle:  TextStyle(
                                color: Color(0xFF424242)
                            )
                        ),

                      ),
                    ),
                     const Padding(
                      padding: EdgeInsets.only(left: 20.0,right: 20,top: 10),
                      child: Text(
                         "40 Dza Litre"
                            ),

                    ),
                    const Padding(
                      padding: EdgeInsets.only(bottom: 30.0,left: 20,right: 20,top: 5),
                      child: Text("(+30%) adds for tips"),
                    )
                  ],
                ) ,
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(10.0),
              child: Center(
                child: Container(
                  decoration: const BoxDecoration(
                    borderRadius: BorderRadius.all(Radius.circular(10)),
                    color: Color(0xff667EA3),
                  ),
                  width: double.infinity,
                  height: 60.0,
                  child: Center(
                    child: GestureDetector(
                      onTap: () {

                        showModalBottomSheet<void>(
                          context: context,
                          builder: (BuildContext context) {
                            return Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const Padding(
                                  padding: EdgeInsets.all(10.0),
                                  child: Text("Payment Methode",style:TextStyle(fontSize: 20),),
                                ),
                                const Padding(
                                  padding: EdgeInsets.all(10.0),
                                  child: Divider(color: Colors.black,height: 1,),
                                ),
                                Container(
                                  height: 300,
                                  color: Colors.white,
                                  child: Center(
                                    child:  ListView.builder(
                                          padding: const EdgeInsets.all(8),
                                          itemCount: pay.length,
                                          itemBuilder: (BuildContext context, int index) {
                                            return  Card(
                                                shape: RoundedRectangleBorder(

                                                side: const BorderSide(
                                                color: Colors.black,
                                            ),
                                            borderRadius: BorderRadius.circular(15.0),
                                            ),
                                            child:  ListTile(
                                              onTap: (){

                                                Reserver(widget.id, dinar.text, Type, 'el harach', adr.text);
                                                Navigator.push(
                                                  context,
                                                  MaterialPageRoute(builder: (context) => const ValidationResrv()),
                                                );

                                              },

                                              title: Text(pay[index].Name),
                                              leading:  Image.network(pay[index].ic),

                                            ));
                                          }
                                      ),
                                  ),
                                ),
                                const Spacer(),
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Center(
                                    child: Container(
                                      decoration: const BoxDecoration(
                                        borderRadius: BorderRadius.all(Radius.circular(10)),
                                        color: Color(0xff667EA3),
                                      ),
                                      width: double.infinity,
                                      height: 60.0,
                                      child: Center(
                                        child: GestureDetector(
                                          onTap: () {
                                            Navigator.push(
                                              context,
                                              MaterialPageRoute(builder: (context) => const ValidationResrv()),
                                            );
                                          },
                                          child: const Text("Go to Station",style: TextStyle(color:Colors.white,fontSize: 20,fontWeight: FontWeight.bold),),
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            );
                          },
                        );
                      },
                      child: const Text("Ask For Charge ",style: TextStyle(color:Colors.white,fontSize: 20,fontWeight: FontWeight.normal),),
                    ),
                  ),
                ),
              ),
            ),



          ],
        ),
      )
    );
  }
}
