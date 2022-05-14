import 'package:flutter/material.dart';
import 'package:naftal/Screens/MainPage.dart';
import 'package:naftal/Screens/reserve.dart';

class ValidationResrv extends StatelessWidget {
  const ValidationResrv({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Padding(
        padding: const EdgeInsets.only(top:50.0),
        child: Column(
          children: [
            Text("Charging is Done",style: TextStyle(fontSize: 35,fontWeight: FontWeight.bold),),
            SizedBox(height: 20,),

            Text("Congratulations you’ve win ",style: TextStyle(fontSize: 15,fontWeight: FontWeight.bold),),
            SizedBox(height: 20,),

            Text(" 20 points",style: TextStyle(fontSize: 35,fontWeight: FontWeight.bold,color: Colors.orange),),

            // const SizedBox(height: 100,),
            Image.network("https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg"
            ,height: 250,
            ),
            Text('Validation Screen'),
            //Spacer(),

        Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [


            Container(
              height: 260,
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
                            Text("2000 Dza",style: TextStyle(fontSize: 35,fontWeight: FontWeight.bold),),
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
                                Text('akbou',style: TextStyle(fontSize: 12,fontWeight: FontWeight.w100),),
                              ],
                            ),
                            Column(
                              children: [
                                Text("Litre ",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                                Text("20 litre",style: TextStyle(fontSize: 12,fontWeight: FontWeight.w100),),
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
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => MainPage()),
                        );
                      },
                      child: const Text("Go Back",style: TextStyle(color:Colors.white,fontSize: 20,fontWeight: FontWeight.bold),),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
