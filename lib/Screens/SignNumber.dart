import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:naftal/Screens/MainPage.dart';
import 'HomePage.dart';

class SignNumber extends StatefulWidget {
  const SignNumber({Key? key}) : super(key: key);

  @override
  State<SignNumber> createState() => _SignNumberState();
}

class _SignNumberState extends State<SignNumber> {
  _getFromGallery() async {
    PickedFile pickedFile = await ImagePicker().getImage(
      source: ImageSource.gallery,
      maxWidth: 1800,
      maxHeight: 1800,
    );
    if (pickedFile != null) {
      File imageFile = File(pickedFile.path);
    }
  }
  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget> [
            const SizedBox(height: 100,),
            Image.network("https://logosave.com/images/large/1/Naftal-Algerie-logo.gif"),
            SizedBox(height: 10,),
            const Text("Create an Account to Pay your fuel bills automatically with only few clicks.",style: TextStyle(fontSize: 15,fontWeight: FontWeight.bold),),
            SizedBox(height: 10,),

            Row(
              children: [
                Icon(Icons.image),
                FlatButton(

                  color: Colors.transparent,
                  onPressed: () {
                    _getFromGallery();
                  },
                  child: const Text("upload profile picture"),
                ),
              ],
            ),

            const Padding(
              padding:  EdgeInsets.only(top: 10),
              child:  TextField(
                decoration: InputDecoration(
                    border: OutlineInputBorder(),

                    labelText: 'Phone Number',
                    hintText: 'enter your name'
                ),
              ),
            ),
            const SizedBox(height: 20,),

            const Padding(
              padding: EdgeInsets.only(top: 10),
              child: TextField(
                obscureText: true,
                decoration: InputDecoration(

                    border: OutlineInputBorder(),
                    labelText: 'Password',
                    hintText: 'Enter your email'
                ),
              ),
            ),
            const SizedBox(height: 20,),

            const Spacer(),
            Center(
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
                        MaterialPageRoute(builder: (context) =>  MainPage()),
                      );
                    },
                    child: const Text("Finish Process ",style: TextStyle(color:Colors.white,fontSize: 20,fontWeight: FontWeight.bold),),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );;
  }
}
