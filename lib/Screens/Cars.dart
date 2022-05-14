import 'package:flutter/material.dart';

import '../Classes/CarClass.dart';
import 'CreatePersonelCar.dart';

class Cars extends StatefulWidget {
  const Cars({Key? key}) : super(key: key);

  @override
  State<Cars> createState() => _CarsState();
}

class _CarsState extends State<Cars> {
  final numbers = [
  'Personel Car',
  'Work Car',
  ];
  int selectedIndex = -1;

  // Initial Selected Value
  String dropdownvalue = 'Item 1';

  // List of items in our dropdown menu
  var items = [
    'Personel Car',
    'Work Car',
      ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,

      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.start,

        children: [

          Container(
            height: 250,
            width: double.infinity,
            color: Color(0xffF9E1A5),
            child: Padding(
              padding: const EdgeInsets.only(top:80.0,left: 20),
              child: Column(

                      crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text("Your Naftal Credit",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold),),
                  SizedBox(height: 10,),
                  Text("200000 Dza",style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold),),
                  SizedBox(height: 10,),
                  TextButton(onPressed: (){}, child:
                  Text("Enter a Bond",style: TextStyle(fontSize: 15,color: Colors.black, decoration: TextDecoration.underline,fontWeight: FontWeight.bold),
                  ),),



                ],
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              children: [
                Text("Cars",style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold),),
              ],
            ),
          ),

          SizedBox(
            height: 360,
            child: Center(
              child: ListView.builder(
                  padding: const EdgeInsets.all(0),
                  itemCount: cr.length,
                  itemBuilder: (BuildContext context, int index) {
                    return
                      FlatButton(
                        onPressed: (){

                          showModalBottomSheet<void>(
                           /// isScrollControlled: true,
                            context: context,
                            builder: (BuildContext context) {
                              return Column(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                   Padding(
                                    padding: EdgeInsets.all(10.0),
                                    child: Row(
                                      children: [
                                        Icon(Icons.car_rental),

                                        Text(cr[index].name,style:TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                                      ],
                                    ),
                                  ),
                                  const Padding(
                                    padding: EdgeInsets.all(10.0),
                                    child: const Divider(color: Colors.black,height: 1,),
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
                 crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Row(
                                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                      children:  [
                                        Row(
                                          children: [
                                            Icon(Icons.car_rental),
                                            Text(cr[index].name,style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                                          ],
                                        ),
                                        Text(cr[index].pitrole,style: TextStyle(fontSize: 20,fontWeight: FontWeight.normal,color: Colors.orange),),
                                      ],),
                                    const SizedBox(height: 20,),
                                    Row(
                                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                      children: <Widget> [
                                        Row(
                                          children:const <Widget> [
                                            Text("2000 ",style: TextStyle(fontSize: 18,fontWeight: FontWeight.bold),),
                                            Text("DZA ",style: TextStyle(fontSize: 15,fontWeight: FontWeight.w100),),
                                          ],
                                        ),
                                        const SizedBox(height: 10,),

                                      ],
                                    ),
                                    TextButton(onPressed: (){
                                     // car caar=car(name: 'honda', pitrole: "oil", type: "entr");
                                      //print(caar);

                                     //// setState(){


                                    }, child: Text("Transfer Credit to the Car",style: TextStyle(color: Colors.orange),)),

                                  ]

                              )

                          ),





                        ),
                      );}
              ),
            ),
          ),
          FlatButton(
            onPressed: () {
              showModalBottomSheet<void>(
                context: context,
                builder: (BuildContext context) {
                  return Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Padding(
                        padding: EdgeInsets.all(10.0),
                        child: Row(
                          children: [
                            Icon(Icons.car_rental),

                            Text("Create Car",style:TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
                          ],
                        ),
                      ),
                      const Padding(
                        padding: EdgeInsets.all(10.0),
                        child: const Divider(color: Colors.black,height: 1,),
                      ),
                      Container(
                        height:200,
                        child:  ListView.builder(
                            itemCount: numbers.length,
                            itemBuilder: (context, index) {
                              return Card(
                                child: ListTile(
                                  selected: selectedIndex == index? true: false,
                                  selectedTileColor: Colors.blue[100],
                                  title: Text(numbers[index]),
                                  onTap: () {
                                    Navigator.push(
                                      context,
                                      MaterialPageRoute(builder: (context) => CreatePersonelCar()),
                                    );
                                    setState(() {
                                      selectedIndex = index;
                                    });

                                  },
                                ),
                              );
                            }
                        ),)
                      ,




                    ],
                  );
                },
              );
   //           cr.add(car(name:"mazda",type:"hffh",pitrole:"you"));
            },
            child: Padding(

              padding: const EdgeInsets.all(20.0),
              child: Container(child: const Center(child: Text("Add Car")),
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
          ),



        ],
      ),
    );
  }
}
