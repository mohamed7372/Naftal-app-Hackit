import 'package:flutter/material.dart';

import 'HomePage.dart';
import 'SignNumber.dart';
class SignIn extends StatelessWidget {



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget> [
            const SizedBox(height: 100,),
            Image.network("https://logosave.com/images/large/1/Naftal-Algerie-logo.gif"),
            const Text("Create an Account to Pay your fuel bills automatically with only few clicks.",style: TextStyle(fontSize: 15,fontWeight: FontWeight.bold),),
            const SizedBox(height: 30,),
            const Padding(
              padding:  EdgeInsets.only(top: 10),
              child:  TextField(
                decoration: InputDecoration(
                    border: OutlineInputBorder(),

                    labelText: 'Full Name',
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
                    labelText: 'xyz@xyz.com',
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
                        MaterialPageRoute(builder: (context) => const SignNumber()),
                      );
                    },
                    child: const Text("Create Naftal Account ",style: TextStyle(color:Colors.white,fontSize: 20,fontWeight: FontWeight.bold),),
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
