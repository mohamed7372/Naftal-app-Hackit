import 'package:flutter/material.dart';

import '../Payment.dart';

class Profile extends StatelessWidget {
  const Profile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.only(top: 40.0,right: 15,left: 15,bottom: 10),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children:const <Widget> [
                 Icon( Icons.settings,size: 40,),
                 Spacer(),
                 Icon( Icons.outbond,size: 40,),
                ],
              ),

            ),
            const Center(
              child: CircleAvatar(
                radius: 50,
                backgroundImage: NetworkImage("https://scontent.falg1-2.fna.fbcdn.net/v/t39.30808-6/278877376_1043399623264407_6818784533437882875_n.jpg?_nc_cat=103&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeEJEYCC1Q6AXUom32i3W4XwnomAXHdp0BGeiYBcd2nQEUAveypamH1SzHD_kuXsjbIM0tOr_EEpabZVpi8-QW4k&_nc_ohc=exTLLqpsumUAX_HpIff&_nc_zt=23&_nc_ht=scontent.falg1-2.fna&oh=00_AT9OkiVUlggp-Z3Hz0kXgfnskdPbBFxQKfBk5f4Fnj98Cw&oe=62846D90"),
              ),
            ),

           const Center(
              child:  Padding(
                padding: EdgeInsets.only(top: 8.0,bottom: 15,),
                child: Text("Hamoudi Youba",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
              ),
            ),

            Padding(
              padding: const EdgeInsets.only(bottom: 10.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Row(children: const [
                    Text("40 ",style: TextStyle(color:Colors.blue,fontSize: 30,fontWeight: FontWeight.bold),),
                    Text("Points",style: TextStyle(fontSize: 18,fontWeight: FontWeight.bold),),
                  ],),
                  Row(children: const [
                    Text("40 ",style: TextStyle(color:Colors.orange,fontSize: 30,fontWeight: FontWeight.bold),),
                    Text("Points",style: TextStyle(fontSize: 18,fontWeight: FontWeight.bold),),
                  ],),
                ],
              ),
            ),
         const   Padding(
              padding:  EdgeInsets.only(top: 20.0,left: 20),
              child:  Text("Personnel Information",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold,),),
            ),
            const Divider(height: 20,),
            Padding(
              padding: const EdgeInsets.only(left: 20.0,bottom: 20),
              child: Row(children: const [
                Icon(Icons.supervised_user_circle,color:Colors.grey ,),
                Text("  HAMOUDI Youba", style: TextStyle(fontSize: 18,fontWeight: FontWeight.w200 ,)),

              ],),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 20.0,bottom: 20),
              child: Row(children: const [
                Icon(Icons.mail,color:Colors.grey ,),
                Text("  youbahamoudi4@gmail.com", style: TextStyle(fontSize: 18,fontWeight: FontWeight.w200 ,)),

              ],),
            ),

            Padding(
              padding: const EdgeInsets.only(left: 20.0,bottom: 10),
              child: Row(children: const [
                Icon(Icons.phone,color:Colors.grey ,),
                Text("  0794920076", style: TextStyle(fontSize: 18,fontWeight: FontWeight.w200 ,)),

              ],),
            ),
            const   Padding(
              padding:  EdgeInsets.only(top: 20.0,left: 20),
              child:  Text("Payment Methods",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold,),),
            ),
            const Divider(height: 20,),

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
                            /*onTap: (){
                              Navigator.push(
                                context,
                                MaterialPageRoute(builder: (context) => c()),
                              );

                            },*/

                            title: Text(pay[index].Name),
                            leading:  Image.network(pay[index].ic),

                          ));
                    }
                ),
              ),
            ),



          ],
        ),
      ),
    );
  }
}
