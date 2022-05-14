
import 'dart:collection';

import 'package:flutter/material.dart';

import 'package:google_maps_flutter/google_maps_flutter.dart';

import '../Payment.dart';
import 'CurrentLocation.dart';
import 'Quantite.dart';
import 'ValdRes.dart';
class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  var mymarkers=HashSet<Marker>();
  final numbers = [
    'Personel Car',
    'Work Car',
  ];
  int selectedIndex = -1;

  // Initial Selected Value
  String dropdownvalue = 'Item 1';


  @override
  Widget build(BuildContext context) {
    return  Scaffold(

        backgroundColor: Colors.white,
      floatingActionButton: FloatingActionButton(
        onPressed: () {  showModalBottomSheet<void>(
          context: context,
          builder: (BuildContext context) {
            return Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Padding(
                  padding: EdgeInsets.all(10.0),
                  child: Text("Station",style:TextStyle(fontSize: 20),),
                ),
                const Padding(
                  padding: EdgeInsets.all(10.0),
                  child: Divider(color: Colors.black,height: 1,),
                ),
                Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Row(
                    children: [
                      Icon(Icons.alarm,size: 20,),
                      Text("  20 min",style:TextStyle(fontSize: 20),),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Row(
                    children: [
                      Icon(Icons.location_on,size: 20,),
                      Text("   5 km",style:TextStyle(fontSize: 20),),
                    ],
                  ),
                ),
                const Padding(
                  padding: EdgeInsets.all(10.0),
                  child: Text("Choose wich  Car",style:TextStyle(fontSize: 18,color: Colors.blue),),
                ),
                const Padding(
                  padding: EdgeInsets.all(10.0),
                  child: Divider(color: Colors.black,height: 1,),
                ),
                Container(
                  height:150,
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
                                MaterialPageRoute(builder: (context) =>quantite ()),
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
               
              //  const Spacer(),
                /*Padding(
                  padding: const EdgeInsets.all(8.0),
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
                ),*/
              ],
            );
          },
        );},
        child: Icon(Icons.arrow_circle_down),
      ),


      body:  GoogleMap(
        initialCameraPosition: CameraPosition(

          target: const LatLng(36.7538 ,3.0588),zoom: 10


        ),onMapCreated:(GoogleMapController googleMapController){

          setState(() {
            mymarkers.add(
              Marker(markerId:MarkerId('1'),
              position:LatLng(36.7107814, 3.2600006),
                infoWindow: InfoWindow(
                title: '10 min',
                  snippet: "pompe essence hammadi",


                ),
              )
            );
            mymarkers.add(
                Marker(markerId:MarkerId('3'),
                  position:LatLng(36.6012938, 3.0892592),
                  infoWindow: InfoWindow(
                    title: '15 min',
                    snippet: "pompe essence Kouba",

                  ),
                )
            );
            mymarkers.add(

                Marker(markerId:MarkerId('2'),
                  position:LatLng(36.7200917, 3.0929112),
                  infoWindow: InfoWindow(

                    title: 'pompe essence Hussein Dey',
                      snippet: "20 min",
                      onTap: (){}

                  ),
                )
            );
            mymarkers.add(
                Marker(markerId:MarkerId('4'),
                  position:LatLng(	36.7407775, 3.0892926),
                  infoWindow: InfoWindow(
                    title: "25 min",
                      snippet: "pompe essence 	Hussein Dey "

                  ),
                )
            );
            mymarkers.add(
            Marker(markerId:MarkerId('6'),
            position:LatLng(36.7278766, 3.153989),
            infoWindow: InfoWindow(
            title: '30 min',
              snippet: "pompe essence 	Mohammadia"

            ),
            )
            );
            mymarkers.add(
                Marker(markerId:MarkerId('7'),
                  position:LatLng(36.7278766,  3.1539891),
                  infoWindow: InfoWindow(
                    title: 'pompe essence 	Mohammadia',

                  ),
                )
            );
          });


      },
    markers: mymarkers,
      )
    );
  }
}
