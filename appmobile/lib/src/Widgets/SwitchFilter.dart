import 'package:flutter/material.dart';

class SwitchFilter extends StatefulWidget {
  final String text;
  final Color stackColor;
  final Color color;

  SwitchFilter({
    Key key,
    @required this.text,
    this.stackColor,
    this.color,
  }) : super(key: key);

  @override
  _SwitchFilterState createState() => _SwitchFilterState();
}

class _SwitchFilterState extends State<SwitchFilter> {
  bool isSwitched = false;

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Row(
          children: <Widget>[
            Switch(
              value: isSwitched,
              onChanged: (value) {
                setState(() {
                  isSwitched = value;
                });
              },
              activeTrackColor: widget.stackColor,
              activeColor: widget.color,
            ),
            Text(
              widget.text,
            )
          ],
        ),
    );
  }
}