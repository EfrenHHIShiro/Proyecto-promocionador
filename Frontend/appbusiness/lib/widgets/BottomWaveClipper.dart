import 'package:flutter/material.dart';

class BottomWaveClipper extends CustomClipper<Path> {

  double convex;
  BottomWaveClipper({this.convex});

  @override
  Path getClip(Size size) {

    double difference = size.height*0.168;

    Path path = Path();
    path.quadraticBezierTo(0, size.height, 0, size.height);
    path.quadraticBezierTo(size.width, size.height, size.width, size.height);
    path.quadraticBezierTo(size.width, size.height, size.width, 0);
    path.moveTo(size.width/2, 0);
    return path;
  }

  @override
  bool shouldReclip(CustomClipper<Path> oldClipper) {
    return true;
  }
}
