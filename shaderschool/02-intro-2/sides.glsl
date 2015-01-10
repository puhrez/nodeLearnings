void sideLengths(
  highp float hypotenuse, 
  highp float angleInDegrees, 
  out highp float opposite, 
  out highp float adjacent) {


  //TODO: Calculate side lengths here
  //opposite = (hypotenuse * sin(angleInDegrees));
  adjacent = (hypotenuse * cos(radians(angleInDegrees)));
  //adjacent = (opposite * tan(angleInDegrees));
  opposite = (adjacent * tan(radians(angleInDegrees)));
}

//Do not change this line
#pragma glslify: export(sideLengths)