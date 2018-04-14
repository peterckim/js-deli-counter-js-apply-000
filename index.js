function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  if (line.length > 0) {
    var firstPerson = line[0];
    line.pop();
    return `Currently serving ${firstPerson}.;
  }
}