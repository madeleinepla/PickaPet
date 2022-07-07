const mongoose = require('mongoose');
const Pet = require('./models/Pet');
const User = require('./models/User');
const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err))

const seedPets = [
  {
    name: "Apple",
    species: "Dog",
    breed: "Shiba Inu",
    birthday: Date('2009-06-08'),
    gender: "M",
    description: "The Shiba Inu is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan. A small, alert, and agile dog that copes very well with mountainous terrain and hiking trails, the Shiba Inu was originally bred for hunting. It looks similar to and is often mistaken for other Japanese dog breeds such as the Akita Inu or Hokkaido, but the Shiba Inu is a different breed with a distinct blood line, temperament, and smaller size than other Japanese dog breeds.",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/shiba.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/shiba-play.gif",
  },
  {
    name: "Biscuit",
    species: "Dog",
    breed: "Corgi",
    birthday: Date('2010-12-29'),
    gender: "F",
    description: "The Cardigan Welsh Corgi is a masterpiece of the breeder's art: Every aspect of its makeup is perfectly suited to moving cattle, and yet it is so congenial and sweet-faced that it would be a cherished companion even if it never did a day's work. Long, low-set dogs with sturdy bone, short legs, and a deep chest, Cardigans are powerful workers of deceptive speed and grace. Cardis can weigh anywhere from 25 to 34 pounds, with females at the lower end of the scale. They come in several coat colors, from red to the popular blue-merle pattern. The quickest way to distinguish Cardis from their cousins, Pembroke Welsh Corgis, is to check out the hindquarters: Cardigans have tails; Pembrokes do not. Cardis are trainable, faithful, and vigilant guardians with a 'big dog' bark. Well-socialized Cardis are especially fond of kids and agreeable with other pets. These athletic, rugged herders have a love for the outdoors, and they thrive on mental stimulation and physical activity.",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/corgi.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/corgi-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/corgi-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/corgi-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/corgi-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/corgi-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/corgi-play.gif",
  },
  {
    name: "Eddy",
    species: "Dog",
    breed: "Golden Retriver",
    birthday: Date('2019-01-01'),
    gender: "M",
    description: "The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America's most popular dog breeds. They are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events, and have an endearing love of life when not at work. The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name. The broad head, with its friendly and intelligent eyes, short ears, and straight muzzle, is a breed hallmark. In motion, Goldens move with a smooth, powerful gait, and the feathery tail is carried, as breed fanciers say, with a 'merry action.' The most complete records of the development of the Golden Retriever are included in the record books that were kept from 1835 until about 1890 by the gamekeepers at the Guisachan (pronounced Gooeesicun) estate of Lord Tweedmouth at Inverness-Shire, Scotland. These records were released to public notice in Country Life in 1952, when Lord Tweedmouth's great-nephew, the sixth Earl of Ilchester, historian and sportsman, published material that had been left by his ancestor. They provided factual confirmation to the stories that had been handed down through generations. Goldens are outgoing, trustworthy, and eager-to-please family dogs, and relatively easy to train. They take a joyous and playful approach to life and maintain this puppyish behavior into adulthood. These energetic, powerful gundogs enjoy outdoor play. For a breed built to retrieve waterfowl for hours on end, swimming and fetching are natural pastimes.  ",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/golden.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/golder-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/golder-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/golder-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/golder-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/golder-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/golder-play.gif",
  },
  {
    name: "Hachi",
    species: "Dog",
    breed: "German Shepard",
    birthday: Date('2000-01-01'),
    gender: "F",
    description: "Generally considered dogkind's finest all-purpose worker, the German Shepherd Dog is a large, agile, muscular dog of noble character and high intelligence. Loyal, confident, courageous, and steady, the German Shepherd is truly a dog lover's delight. German Shepherd Dogs can stand as high as 26 inches at the shoulder and, when viewed in outline, presents a picture of smooth, graceful curves rather than angles. The natural gait is a free-and-easy trot, but they can turn it up a notch or two and reach great speeds. There are many reasons why German Shepherds stand in the front rank of canine royalty, but experts say their defining attribute is character: loyalty, courage, confidence, the ability to learn commands for many tasks, and the willingness to put their life on the line in defense of loved ones. German Shepherds will be gentle family pets and steadfast guardians, but, the breed standard says, there's a 'certain aloofness that does not lend itself to immediate and indiscriminate friendships.'",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/german.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/german-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/german-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/german-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/german-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/german-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/german-play.gif",
  },
  {
    name: "Balto",
    species: "Dog",
    breed: "Siberian Husky",
    birthday: Date('2007-11-19'),
    gender: "M",
    description: "Siberian Husky, a thickly coated, compact sled dog of medium size and great endurance, was developed to work in packs, pulling light loads at moderate speeds over vast frozen expanses. Sibes are friendly, fastidious, and dignified. The graceful, medium-sized Siberian Husky's almond-shaped eyes can be either brown or blue'¿and sometimes one of each'¿and convey a keen but amiable and even mischievous expression. Quick and nimble-footed, Siberians are known for their powerful but seemingly effortless gait. Tipping the scales at no more than 60 pounds, they are noticeably smaller and lighter than their burly cousin, the Alaskan Malamute. As born pack dogs, they enjoy family life and get on well with other dogs. The Sibe's innate friendliness render them indifferent watchdogs. These are energetic dogs who can't resist chasing small animals, so secure running room is a must. An attractive feature of the breed: Sibes are naturally clean, with little doggy odor.",
    profileUrl: "https://yep-seeds.s3.amazonaws.com/pickapet/huskie.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/huskie-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/huskie-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/huskie-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/huskie-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/huskie-pat.gif",
    playGif: "https://yep-seeds.s3.amazonaws.com/pickapet/huskie-play.gif",
  },
  {
    name: "Trinity",
    species: "Dog",
    breed: "Cocker Spaniel",
    birthday: Date('2014-02-09'),
    gender: "M",
    description: "The merry and frolicsome Cocker Spaniel, with his big, dreamy eyes and impish personality, is one of the world's best-loved breeds. They were developed as hunting dogs, but Cockers gained their wide popularity as all-around companions. Those big, dark eyes; that sweet expression; those long, lush ears that practically demand to be touched'¿no wonder the Cocker spent years as America's most popular breed. The Cocker is the AKC's smallest sporting spaniel, standing about 14 to 15 inches. The coat comes in enough colors and patterns to please any taste. The well-balanced body is sturdy and solid, and these quick, durable gundogs move with a smooth, easy gait. Cockers are eager playmates for kids and are easily trained as companions and athletes. They are big enough to be sporty, but compact enough to be portable. A Cocker in full coat rewards extra grooming time by being the prettiest dog on the block. These energetic sporting dogs love playtime and brisk walks.",
    profileUrl: "https://yep-seeds.s3.amazonaws.com/pickapet/spaniel.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/spaniel-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/spaniel-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/spaniel-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/spaniel-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/spaniel-pat.gif",
    playGif: "https://yep-seeds.s3.amazonaws.com/pickapet/spaniel-play.gif",
  },
  {
    name: "Siren",
    species: "Dog",
    breed: "Dalmation",
    birthday: Date('2012-09-14'),
    gender: "F",
    description: "The dignified Dalmatian, dogdom's citizen of the world, is famed for his spotted coat and unique job description. During their long history, these \"coach dogs\" have accompanied the horse-drawn rigs of nobles, gypsies, and firefighters. The Dalmatian's delightful, eye-catching spots of black or liver adorn one of the most distinctive coats in the animal kingdom. Beneath the spots is a graceful, elegantly proportioned trotting dog standing between 19 and 23 inches at the shoulder. Dals are muscular, built to go the distance; the powerful hindquarters provide the drive behind the smooth, effortless gait. The Dal was originally bred to guard horses and coaches, and some of the old protective instinct remains. Reserved and dignified, Dals can be aloof with strangers and are dependable watchdogs. With their preferred humans, Dals are bright, loyal, and loving house dogs. They are strong, active athletes with great stamina'¿a wonderful partner for runners and hikers.",
    profileUrl: "https://yep-seeds.s3.amazonaws.com/pickapet/dal.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/dal-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/dal-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/dal-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/dal-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/dal-pat.gif",
    playGif: "https://yep-seeds.s3.amazonaws.com/pickapet/dal-play.gif",
  },
  {
    name: "Nala",
    species: "Cat",
    breed: "British Shorthair",
    birthday: Date('2019-01-01'),
    gender: "F",
    description: "The British Shorthair is compact, well-balanced and powerful, showing good depth of body, a full broad chest, short to medium strong legs, rounded paws, tail thick at base with a rounded tip. The head is round with good width between the ears, round cheeks, firm chin, medium ears, large round and wellopened eyes, and a medium broad nose. The coat is short and very dense. Females are less massive in all respects with males having larger jowls. This breed takes a full 3-5 years to reach full maturity and development. Individuals should convey an overall impression of balance and proportion in which no feature is exaggerated to foster weakness or extremes.",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/british.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/british-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/british-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/british-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/british-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/british-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/british-play.gif",
  },
  {
    name: "Simba",
    species: "Cat",
    breed: "Orange Tabby",
    birthday: Date('2016-11-30'),
    gender: "M",
    description: "A tabby is any domestic cat (Felis catus) with a distinctive 'M'-shaped marking on its forehead; stripes by its eyes and across its cheeks, along its back, and around its legs and tail; and (differing by tabby type), characteristic striped, dotted, lined, flecked, banded, or swirled patterns on the body—neck, shoulders, sides, flanks, chest, and abdomen. \"Tabby\" is not a breed of cat, but a coat type seen in almost all genetic lines of domestic cats, regardless of status.",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/orange.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/orange-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/orange-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/orange-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/orange-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/orange-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/orange-play.gif",
  },
  {
    name: "Taco",
    species: "Cat",
    breed: "Kinkalow",
    birthday: Date('2013-12-31'),
    gender: "F",
    description: "The kinkalow is a rare cat breed that originated in the United States. It is a hybrid between the American Curl and Munchkin gene. The kinkalow took root in the mid-1990's when a cat breeder named Terri Haris paired two types of felines; the Munchkin and American Curl, just to see what kind of kittens they would produce. The kittens turned out how she wanted them to. They inherited the Muchkin's short legs and American Curl's curled ears.",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/kinkalow.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/kinkalow-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/kinkalow-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/kinkalow-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/kinkalow-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/kinkalow-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/kinkalow-play.gif",
  },
  {
    name: "Woody",
    species: "Cat",
    breed: "Exotic Shorthair",
    birthday: Date('2022-03-28'),
    gender: "M",
    description: "Exotic Shorthairs have a gentle and calm personality reminiscent of the Persian, but are generally livelier than their longhaired ancestors. Curious and playful, they are friendly to other cats and dogs, but they don't like being left alone and need the presence of their owner. They tend to show more affection and loyalty than most breeds and make excellent lap cats. Their calm, steady nature makes them ideal apartment cats for city dwellers. Nonetheless, Exotics retain some of the energetic spark of the American Shorthair, and they are often capable mouse hunters.",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/shorthair.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shorthair-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shorthair-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shorthair-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shorthair-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shorthair-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/shorthair-play.gif",
  },
];



// const seedUsers = [
  // {
  //   username: "example5",
  //   email: "example5@email.com",
  //   password:"example5",
  //   dateJoined: new Date(),
  //   points:0,
    
  // },
  // {
  //   username: "example6",
  //   email: "example6@email.com",
  //   password:"example6",
  //   pets: ["62c455783868e8e380db2c53", "62c44a19a044df29db96c38b"],
  //   dateJoined: new Date(),
  //   points:0,
  // },
  // {
  //   username: "example7",
  //   email: "example7@email.com",
  //   password:"example7",
  //   dateJoined: new Date(),
  //   pets: ["62c44a19a044df29db96c38c"],
  //   friends: ["62c45a51fb0e50b80c1b28ec"],
  //   points:0,
  // },

  // {
  //   username: "nilshen",
  //   email: "nilshen@email.com",
  //   password:"nilshen",
  //   dateJoined: new Date(),
  //   pets: ["62c4ec3afd3744f543419678", "62c4ec3afd3744f543419679"],
  //   friends: [],
  //   points:0,
  // },

  
// ]  


const seedDB = async () => {
  await Pet.deleteMany({});
  await Pet.insertMany(seedPets);
};

seedDB()
  .then(() => mongoose.connection.close());

// const userDB = async () => {
//   // await User.deleteMany({});
//   await User.insertMany(seedUsers);
// };
  
// userDB()
//   .then(() => mongoose.connection.close());