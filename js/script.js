function getGP(marks) {
  if (marks >= 85 && marks <= 100) {
    return 4.0;
  } else if (marks >= 80 && marks < 85) {
    return 3.7;
  } else if (marks >= 75 && marks < 80) {
    return 3.3;
  } else if (marks >= 70 && marks < 75) {
    return 3.0;
  } else if (marks >= 65 && marks < 70) {
    return 2.7;
  } else if (marks >= 61 && marks < 65) {
    return 2.3;
  } else if (marks >= 58 && marks < 61) {
    return 2.0;
  } else if (marks >= 55 && marks < 58) {
    return 1.7;
  } else if (marks >= 50 && marks < 55) {
    return 1.0;
  } else if (marks < 50) {
    return 0.0;
  }
}
