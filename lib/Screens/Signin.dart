import 'dart:convert';

import 'package:flutter/material.dart';
import 'dart:io';
import 'package:http/http.dart' as http;
import 'package:dio/dio.dart';

import '../Classes/User.dart';
import 'HomePage.dart';
import 'MainPage.dart';
import 'SignNumber.dart';
class SignIn extends StatelessWidget {

  TextEditingController username=TextEditingController();
  TextEditingController email=TextEditingController();


  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:  SingleChildScrollView(
        child: Form(
          key: _formKey,
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget> [
                const SizedBox(height: 50,),
                Image.network("https://www.b2b-algeria.net/file/2020/08/NAFTAL.jpg"),
                const Text("Create an Account to Pay your fuel bills automatically with only few clicks.",style: TextStyle(fontSize: 15,fontWeight: FontWeight.bold),),
                const SizedBox(height: 30,),
                 Padding(
                  padding: const  EdgeInsets.only(top: 10),
                  child:  TextFormField(
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Please enter some text';
                      }
                      return null;
                    },
                    controller: username,
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(),

                        labelText: 'Full Name',
                        hintText: 'enter your name'
                    ),
                  ),
                ),
                const SizedBox(height: 20,),

                 Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: TextFormField(
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Please enter some text';
                      }
                      return null;
                    },
                    controller:email ,
                    obscureText: true,
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(),

                        labelText: 'xyz@xyz.com',
                        hintText: 'Enter your email'
                    ),
                  ),
                ),
                const SizedBox(height: 20,),

     // Spacer(),
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

                            Navigator.push(
                              context,
                              MaterialPageRoute(builder: (context) => SignNumber(username:username.text,email:email.text)),
                            );

                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(content: Text('Processing Data')),
                            );
                          }
                        //  Register();

                        },
                        child: const Text("Create Naftal Account ",style: TextStyle(color:Colors.white,fontSize: 20,fontWeight: FontWeight.bold),),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
class AppUrl {
  static const String liveBaseURL = "https://remote-ur/api/v1";
  static const String localBaseURL = "http://10.0.2.2:4000/api/v1";

  static const String baseURL = liveBaseURL;
  static const String login = baseURL + "/session";
  static const String register = baseURL + "/registration";
  static const String forgotPassword = baseURL + "/forgot-password";
}