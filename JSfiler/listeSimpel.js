l = ['hej','med','dig',9];

for (i of l){
  console.log(i);
}

addInformatik();

function addInformatik(){
  l.pop();
  l.push('informatik!');
}