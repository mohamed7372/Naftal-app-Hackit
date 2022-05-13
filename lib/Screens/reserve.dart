
import 'package:flutter/material.dart';
import 'package:naftal/Screens/HomePage.dart';
import 'package:naftal/Screens/ValdRes.dart';

import '../Payment.dart';

class Reserve extends StatefulWidget {
  const Reserve({Key? key}) : super(key: key);

  @override
  _ReserveState createState() => _ReserveState();
}

class _ReserveState extends State<Reserve> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 20,),

            Image.network("https://logosave.com/images/large/1/Naftal-Algerie-logo.gif"),
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

                      padding:  EdgeInsets.only(left: 20.0,right: 20,top: 20,bottom: 10),
                      child:  Container(
                        decoration: const BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.circular(8)),
                          color: Colors.white,
                        ),
                        child: const TextField(

                          decoration: InputDecoration(
                              border: OutlineInputBorder(),


                              labelText: 'Your location ',
                             // hintText: 'enter your name'
                          ),
                        ),
                      ),
                    ),
                    const Padding(
                      padding: EdgeInsets.only(left: 20.0,right: 20),
                      child: TextField(
                       // controller: this._emailController,
                        decoration:  InputDecoration(
                            hintText: "Litre",
                            labelText: "Litre",
                            labelStyle:  TextStyle(
                                color: Color(0xFF424242)
                            )
                        ),

                      ),
                    ),
                    const Padding(
                      padding: EdgeInsets.only(left: 20.0,right: 20),
                      child: TextField(
                        // controller: this._emailController,
                        decoration:  InputDecoration(
                            hintText: "Litre",
                            labelText: "Litre",
                            labelStyle:  TextStyle(
                                color: Color(0xFF424242)
                            )
                        ),

                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(bottom: 30.0,left: 20,right: 20,top: 5),
                      child: const Text("*(+30%) adds for tips"),
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
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text("Payment Methode",style:TextStyle(fontSize: 20),),
                                ),
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
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
                                                Navigator.push(
                                                  context,
                                                  MaterialPageRoute(builder: (context) => ValidationResrv()),
                                                );

                                              },

                                              title: Text(pay[index].Name),
                                              leading:  Icon(pay[index].ic),

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
                                              MaterialPageRoute(builder: (context) => ValidationResrv()),
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
