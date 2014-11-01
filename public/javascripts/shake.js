$(document).ready(function() {
  $('#shake').click(function () {
    var eightArr = ["You're too good for him.", "If he said he'd call the next day, in boy time that means Thursday.",
      "You are just totally clueless.", "Ugh, as if!","Make sure he sees you, but don't say hi first.",
      "Look like you're having fun and you're really popular.", "Talk to someone in his eyeline, preferably a guy.",
      "Make him come to you.", "Find an excuse to leave while he's still into the conversation.", 
      "They key is, always have him wanting more.", "Don't be stupid, you can do so much better.",
      "He thinks he's all that.", "Just as long as his you-know-what isn't crooked.", 
      "Don't sell yourself short.", "You gave him a toothache.", "Do a lap before you commit to a location.",
      "You two don't make any sense.", "You are the most beautiful girl in Beverly Hills.",
      "You know you're gorgeous, alright? And popular.", "Wine makes people wanna feel, like sexy.",
      "He dresses better than you. What would you bring to the relationship?", "You don't mesh well together.",
      "Don't rely on mirrors; always take polaroids.", "Whenever a boy comes, you should always have something baking.",
      "Don't forget to design a lighting concept.", "Tis a far, far better thing doing stuff for other people.",
      "Anything you can do to draw attention to your mouth is good.", "Okay, okay, so he is kind of a Baldwin.",
      " Legs crossed towards each other. That is an unequivocal sex invite.",
      "Sometimes you have to show a little skin. This reminds boys of being naked, and then they think of sex."];
    var rand = eightArr[Math.floor(Math.random() * eightArr.length)];
    $('#answer p').html(rand).hide().fadeIn(2000);
  });
});




















