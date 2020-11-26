import 'package:appmobile/src/pages/auth/login_page.dart';
import 'package:flutter/material.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SpashScreenState createState() => _SpashScreenState();
}

class _SpashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    Future.delayed(
      Duration(milliseconds: 1500),
      () => Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => LoginPage(),
        ),
      ),
    );
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: new Stack(
        children: <Widget>[
           new Container(
             constraints: BoxConstraints.expand(),
            decoration: new BoxDecoration(
              image: new DecorationImage(
                image: new AssetImage("assets/images/Splash bar.jpg"),
                fit: BoxFit.cover,
              ),
            ),
            child: new Center(child: CircularProgressIndicator()),
          ),
        ],
      ),
    );
  }
}
