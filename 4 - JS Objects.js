var houseKeeper1 = {
  experience: '3 years',
  strengths: 'cleaning and cooking',
  workPermit: true,
};

console.log(houseKeeper1.experience);

function BellBoy(fName, age, hasWorkPermit, languages) {
  this.name = fName;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.clean = function () {
    alert('cleaning in progress');
  };
}

var bellBoy1 = new BellBoy('Andi', 21, true, ['English', 'Albanian']);

bellBoy1.clean();
