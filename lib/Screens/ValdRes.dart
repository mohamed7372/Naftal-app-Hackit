import 'package:flutter/material.dart';
import 'package:naftal/Screens/reserve.dart';

class ValidationResrv extends StatelessWidget {
  const ValidationResrv({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          const SizedBox(height: 100,),
          Image.network("https://logosave.com/images/large/1/Naftal-Algerie-logo.gif"),
          Text('Validation Screen'),
          Spacer(),
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
                        MaterialPageRoute(builder: (context) => Reserve()),
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
    );
  }
}
