import 'package:flutter/material.dart';
import '../Payment.dart';
import 'QrCode.dart';
import 'ValdRes.dart';

class quantite extends StatefulWidget {
  const quantite({Key? key}) : super(key: key);

  @override
  _quantiteState createState() => _quantiteState();
}

class _quantiteState extends State<quantite> {
  TextEditingController name=TextEditingController();
  TextEditingController tank=TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,

      appBar: AppBar(backgroundColor: Colors.white,
        title: Text("Create A personnel Car",style: TextStyle(color: Colors.black),),
        shadowColor: Colors.transparent,


      ),
      body: Padding(
        padding: const EdgeInsets.only(top: 30.0,right: 15,left: 15),
        child: Column(
            children:  <Widget>[

        Padding(
        padding: const EdgeInsets.only(top: 10),
        child: TextField(
          controller: name,
          //  obscureText: true,
          decoration: InputDecoration(
            border: const OutlineInputBorder(),
            labelText: 'litre',
            // hintText: 'Enter your email'
          ),
        ),
      ),
      const SizedBox(height: 20,),
      Padding(
        padding:  EdgeInsets.only(top: 10),
        child:  Text(
         "1000 Dza"
            //hintText: 'Enter your email'

        ),
      ),
      const SizedBox(height: 20,),
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

                                                  //  Reserver(widget.id, dinar.text, Type, 'el harach', adr.text);
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
                        //  cr.add(car(name: name.text, pitrole:selectedValue , type:tank.text ));
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => ValidationResrv()),
                          );
                        },
                        child: const Text("Create",style: TextStyle(color:Colors.white,fontSize: 20,fontWeight: FontWeight.bold),),
                      ),
                    ),
                  ),
                ),
              ),
            ])),

    );
  }
}
