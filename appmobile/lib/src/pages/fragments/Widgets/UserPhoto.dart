import 'package:flutter/material.dart';

class UserPhoto extends StatelessWidget {
  final String assetImage;
  final double size;

  const UserPhoto({
    Key key,
    @required this.assetImage,
    this.size = 100,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: this.size,
      height: this.size,
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage(this.assetImage),
          fit: BoxFit.cover,
        ),
        shape: BoxShape.circle,
        border: Border.all(
          color: Colors.white,
          width: 4,
        ),
      ),
      margin: EdgeInsets.only(
        bottom: 5,
      ),
    );
  }
}
