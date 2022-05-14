import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:naftal/Screens/MainPage.dart';
import '../Classes/User.dart';
import 'HomePage.dart';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'dart:io';
import 'package:http/http.dart' as http;

class SignNumber extends StatefulWidget {
  late String email;
  late String username;
  SignNumber({Key? key, required this.username,required this.email}) : super(key: key);

  @override
  State<SignNumber> createState() => _SignNumberState();
}

class _SignNumberState extends State<SignNumber> {

  TextEditingController numeroTel=TextEditingController();
  TextEditingController mdp=TextEditingController();

  Register (email,username,mdp,numeroTel) async{
    var response=await http.post(
        Uri.parse("https://hackit-naftal.herokuapp.com/Utilisateur/Compte/CreerCompteUser2?fbclid=IwAR304ZEL38qRnsBZ2F8wtlKEhAUZ0A1NWhiyWi8e3B4JHBm6bUac7wPQBnw"),
        body:{
          "UserName":username,
          "email":email,
          "NumeroTel":numeroTel,
          "mdp":mdp
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
  final _formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      body: SingleChildScrollView(
        child: Form(
          key: _formKey,
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget> [
                const SizedBox(height: 50,),
                Image.network("https://www.b2b-algeria.net/file/2020/08/NAFTAL.jpg"),
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
                      child:  Text(widget.email),
                    ),
                  ],
                ),

                 Padding(
                  padding: const  EdgeInsets.only(top: 10),
                  child:  TextFormField(
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Please enter some text';
                      }
                      return null;
                    },
                    controller: numeroTel,
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(),

                        labelText: 'Phone Number',
                        hintText: 'enter your name',

                    ),
                  ),
                ),
                const SizedBox(height: 20,),

                 Padding(
                  padding:const  EdgeInsets.only(top: 10),
                  child: TextFormField(
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Please enter some text';
                      }
                      return null;
                    },
                    controller: mdp,
                    obscureText: true,
                    decoration: const InputDecoration(

                        border: OutlineInputBorder(),
                        labelText: 'Password',
                        hintText: 'Enter your email'
                    ),
                  ),
                ),
                 SizedBox(height: 20,),

                 //Spacer(),
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
                          if (_formKey.currentState!.validate()) {
                            // If the form is valid, display a snackbar. In the real world,
                            // you'd often call a server or save the information in a database.
                            Register(widget.email, widget.username, mdp.text, numeroTel.text);
                            Navigator.push(
                              context,
                              MaterialPageRoute(builder: (context) =>  MainPage()),
                            );
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(content: Text('Processing Data')),
                            );
                          }
                          print(widget.email);



                        },
                        child: const Text("Finish Process ",style: TextStyle(color:Colors.white,fontSize: 20,fontWeight: FontWeight.bold),),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );;
  }
}
