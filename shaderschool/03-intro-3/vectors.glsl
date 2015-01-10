highp vec2 func(highp vec2 a, highp vec2 b) {

  //TODO: Implement the exercise here

  highp float prod = length(a) / length(b);
  

  return normalize(prod);
}

//Do not change this line
#pragma glslify: export(func)