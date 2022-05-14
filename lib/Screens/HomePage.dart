
import 'dart:collection';

import 'package:flutter/material.dart';

import 'package:google_maps_flutter/google_maps_flutter.dart';

import '../Payment.dart';
import 'CurrentLocation.dart';
import 'ValdRes.dart';
class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  var mymarkers=HashSet<Marker>();

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
        backgroundColor: Colors.white,


      body:  GoogleMap(
        initialCameraPosition: CameraPosition(

          target: const LatLng(36.7538 ,3.0588),zoom: 10


        ),onMapCreated:(GoogleMapController googleMapController){

          setState(() {
            mymarkers.add(
              Marker(markerId:MarkerId('1'),
              position:LatLng(36.7107814, 3.2600006),
                infoWindow: InfoWindow(
                title: 'pompe essence hammadi',

                ),
              )
            );
            mymarkers.add(
                Marker(markerId:MarkerId('3'),
                  position:LatLng(36.6012938, 3.0892592),
                  infoWindow: InfoWindow(
                    title: 'pompe essence Kouba',

                  ),
                )
            );
            mymarkers.add(

                Marker(markerId:MarkerId('2'),
                  position:LatLng(36.7200917, 3.0929112),
                  infoWindow: InfoWindow(
                    title: 'pompe essence Sidi Moussa',
                    onTap: (){}

                  ),
                )
            );
            mymarkers.add(
                Marker(markerId:MarkerId('4'),
                  position:LatLng(	36.7407775, 3.0892926),
                  infoWindow: InfoWindow(
                    title: 'pompe essence 	Hussein Dey ',

                  ),
                )
            );
            mymarkers.add(
            Marker(markerId:MarkerId('6'),
            position:LatLng(36.7278766, 3.153989),
            infoWindow: InfoWindow(
            title: 'pompe essence 	Mohammadia',

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
