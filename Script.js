// Product data ===============================================================================================================================================


const products = [
  { 
    id: 1,
    name: "Musical Guitar", 
    price: 899.00, 
    image: "https://toycker.com/cdn/shop/files/51eBXKW5gRL._SL1500.jpg?v=1760090797&width=720", 
    image2: "",
    image3: "",
    image4: "",
    description: "This small electric guitar is a fantastic way to introduce boys and girls to music, [ 4 Exciting Play Modes ] – This electric guitar features four unique modes, allowing kids to explore different sounds, rhythms, and musical effects, making playtime more engaging and entertaining." 
  },

  { 
    id: 2, 
    name: "DJ Coco Light & Music Toy", 
    price: 599.00, image: "https://toycker.com/cdn/shop/files/H373b3e2614344291824ff29116a86506M.jpg?v=1760072480&width=720", 
    description: "Transform playtime into an exciting musical adventure with this interactive DJ Mixer toy" 
  },
  { 
    id: 3, 
    name: "Car Rider F-001", 
    price: 949.00, image: "https://toycker.com/cdn/shop/files/Hcb1ba23262e34ed99bfb30a569fdb827C.jpg?v=1760524132&width=720", 
    description: "2 Years+ Light & Music. Immerse your child in delightful adventures with the ‘Bunny Ride On Car’. Designed to enhance motor skills and cognitive development, this toy features a horn and music steering for interactive play. Safety is paramount with a secure safety guard and comfy backrest ensuring a cozy ride. Effortless navigation on various surfaces is facilitated by big wheels, while ample toy storage under the seat encourages imaginative play. Sturdy and durable, this ride-on car supports weights up to 125 Kgs, making it a reliable companion for endless toddler adventures." 
  },
  { 
    id: 4, 
    name: "Tumbling Robot", 
    price: 449.00, image: "https://toycker.com/cdn/shop/files/H7a84fbdba1b447afa7d22f05f86d94eel.jpg?v=1759389941&width=720", 
    description: "Lighted Musical Dancing Robot: This is a mini talking robot with blinking eyes that repeats what you say in a funny voice. This robot can talk, sing, laugh and any continuous sound. Colorful LED blinking eyes will give you and your kids a cooler effect. It is a favorite toy robot for kids and adults. Safe and Non-toxic: This electric robot toy" 
  },
  { 
    id: 5, 
    name: "Metal Bullet Bike", 
    price: 699.00, image: "https://toycker.com/cdn/shop/files/61gOzum2bnL._SX679.jpg?v=1760087926&width=660", 
    description: "The Motorcycle is made of high grade alloy die-cast, high-quality plastic parts, rubber tires. The toys designed for 3+ year old kid’s & No battery is required, to small hands to hold and push, durable and very handy to carry wherever you go." 
  },
  { 
    id: 6, 
    name: "Small Stunt Car Toy", 
    price: 399.00, image: "https://toycker.com/cdn/shop/files/02c06eb5-99f9-4193-a7d4-2a29d46db9bd.jpg?v=1760607867", 
    description: "Car Toy with USB Cable & Remote Controller. This cool racing car can do all sorts of tricks. It can go forward, backward, left and right easily. It can even drive on its sides and spin around in a full circle (360°). When it's moving fast, it can spin like a tornado and dance around. It can also walk upright at a 90-degree angle and do cool wheel spins and rolls in the front." 
  },
  { 
    id: 7, 
    name: "JCB Excavator Toy", 
    price: 949.00, image: "https://toycker.com/cdn/shop/files/61lpqhFNHnL._SL1000.jpg?v=1760094769&width=720", 
    description: "Remote-Controlled Toy With Lights Movable Digging Shovel" 
  },
  { 
    id: 8, 
    name: "Spinning Tower Game", 
    price: 749.00, image: "https://toycker.com/cdn/shop/files/B33380D6-4CC0-4DC8-AF77-99B3F2204C1B__png.jpg?v=1760098265&width=660", 
    description: "Interesting stacking toys:Rainbow rotating tower is a new stacked science and education toy, which can accompany children’s growth in innovative ways, enjoy happy times and help children stay away from screen addiction." 
  },
  { 
    id: 9, 
    name: "Super Shot Blaster Gun", 
    price: 349.00, image: "https://toycker.com/cdn/shop/files/Toy-Cloud-Super-Shot-Soft-SDL981710401-1-1a722.webp?v=1760097752&width=720", 
    description: "1 Soft Blaster Toy Gun with 10 Soft Foam Dart Bullets" 
  },
  { 
    id: 10, 
    name: "F1 Riser Car", 
    price: 399.00, image: "https://toycker.com/cdn/shop/files/61zxLUU4jwL._SL1500_-1.jpg?v=1760076058&width=720", 
    description: "F1 Riser Car is crafted in an iconic Formula 1 style with a sleek and aerodynamic body. Its high-glow glossy finish adds a premium touch, making it look like a miniature version of a real racing car that kids will instantly fall in love with." 
  },
  { 
    id: 11, 
    name: "Double Barreled Gun", 
    price: 699, image: "https://toycker.com/cdn/shop/files/H5728b43ad028494f9b910f478e18a119I.jpg?v=1760072585&width=660", 
    description: "1 Soft Blaster Toy Gun 10 Soft Foam Dart Bullets 6 Bullet Shells, This Toy Gun features a unique manual loading mechanism. Press the barrel release button at the rear, then use your hand to break down the barrel for easy loading. This interactive feature adds realism to the play experience." 
  },
  { 
    id: 12, 
    name: "Deform Plane", 
    price: 699, image: "https://toycker.com/cdn/shop/files/61jzP4ajNnL._SX522__1.jpg?v=1760071295&width=480", 
    description: "2-in-1 Helicopter & Plane Toy, an exciting Fighter Jet.  2-in-1 Transforming Fun – Switch between Dinosaur Mode and Fighter Jet Mode, offering double the excitement in one toy! ✅ Realistic Spray Effect – Features an interactive spray mist that enhances the action, making playtime more engaging." 
  },
  { 
    id: 13, 
    name: "Colour Coder Game", 
    price: 299.00, image: "https://toycker.com/cdn/shop/files/1_1.webp?v=1760070880&width=660", 
    description: "Colorful Disc Matching Game – Sort and match the red, green, blue, and orange discs into their correct positions. Encourages Thinking Skills – Children must plan and decide how to move discs to the right places." 
  },
  { 
    id: 14, 
    name: "Wooden Blocks Coloring Zenga", 
    price: 349.00, image: "https://toycker.com/cdn/shop/files/61vNiltLclL._SL1430_c4bcdb82-1c78-4ba2-a69f-c029cfb77656.jpg?v=1760070610&width=720", 
    description: "It’s the perfect game for everyone that is sturdy and floor game which promotes friendship, communication and logic between players" 
  },
  { 
    id: 15, 
    name: "Flip & Match Game", 
    price: 299.00, image: "https://toycker.com/cdn/shop/files/61BG3eOkjHL._SX522.jpg?v=1760077210&width=480", 
    description: "Boosts Memory & Cognitive Skills – Helps children enhance memory, recall, and attention span through fun matching play. Animal & Fruit Series Included – Comes with themed stickers to teach vocabulary and recognition of animals and fruits." 
  },
  { 
    id: 16, 
    name: "Shape Matching Game", 
    price: 349.00, image: "https://toycker.com/cdn/shop/files/E7646DCF-FA47-4A9B-B82F-081F6BF8E74D__png.jpg?v=1760096740&width=660", 
    description: "Shape Matching Game for Kids 2+ TinyPlay shape matching puzzle game is designed to help children recognize shapes and patterns while enhancing focus and logical thinking. Perfect for kids aged 3 years and above." 
  },
  { 
    id: 17, 
    name: "SMALL SHAPE SORTING", 
    price: 399.00, image: "https://toycker.com/cdn/shop/files/61QaDLvylqL._SX522.jpg?v=1760096920&width=480", 
    description: "Sturdy construction, premium craftsmanship, soft and elastic rope It’s easy to put all in, fun and limitless options,Their hands can reach in and grab the toys inside and out them back, they will do it again and again, offers a huge imagination for your little baby. keeps them entertained and helps them with being patient." 
  },
  { 
    id: 18, 
    name: "BIG SHAPE SORTING", 
    price: 399, image: "https://toycker.com/cdn/shop/files/71PCgTKWHlL._SX522.jpg?v=1760011070&width=480", 
    description: "Baby Shape Sorting Toy is designed to captivate your child’s imagination while fostering key developmental skills. Featuring colorful blocks, alphabet letters, and an innovative elastic band design, this Montessori-inspired toy offers an interactive way for babies and toddlers to explore shapes, colors, and textures" 
  },
  { 
    id: 19, 
    name: "Music Bus", 
    price: 594.00, image: "https://toycker.com/cdn/shop/files/71M9CObEzQL._SL1500.jpg?v=1760090298&width=720", 
    description: "Interactive Learning Experience: This musical bus combines a xylophone, shape sorter, and push & go vehicle, providing endless hours of educational fun for your toddler. Educational Benefits: Enhance your child’s cognitive development, fine motor skills, and sense of rhythm. The xylophone introduces musical concepts while the shape sorter improves hand-eye coordination and shape recognition." 
  },
  { 
    id: 20, 
    name: "Musical Piano With Micro-Phone", 
    price: 1249.00, image: "https://toycker.com/cdn/shop/files/61bTTuAXsYL._SL1500.jpg?v=1760091228&width=720", 
    description: "Piano Keyboard with Microphone is a fun and educational musical toy for toddlers and kids" 
    
  },
  { 
    id: 21, 
    name: "Musical Toy Trumpet", 
    price: 699.00, image: "https://toycker.com/cdn/shop/files/51eDhdnO69L._SL1080.jpg?v=1760092438&width=720", 
    description: "🎺 Interactive Musical Fun Features light and sound functions to engage your toddler and encourage early musical exploration. Perfect for kids 18 months and up. 🎵 Easy to Use Buttons – Comes with colorful pressable buttons that play music, helping improve hand-eye coordination and fine motor skills." 
  },
  { 
    id: 22, 
    name: "Beauty Set (Trolly)", 
    price: 1099.00, image: "https://toycker.com/cdn/shop/files/HLB1aLlUU4TpK1RjSZFKq6y2wXXac.jpg?v=1760010897&width=720", 
    description: "Cosmetic Set 2 in 1 Vanity Table Portable Trolley Set Toy with Make up Accessories. Beauty Makeup Kit Pretend Play Fashion Set Toy with carry case Suitcase trolley is perfect toy for your little angel. It includes: mirror, a hair brush, a hair dryer, some pretend cosmetic accessories, and some jewelry! Mirror, Flashing Lights & Magical Sounds." 
  },
  { 
    id: 23, 
    name: "BIG CARRIER TRUCKS WITH SMALL CARS || RED FIREBRICATE", 
    price: 999.00, image: "https://toycker.com/cdn/shop/files/Hcae74767a33140b28598731b471b960bE.jpg?v=1759400984&width=720", 
    description: "Real Sound Effect and Light: Press the button above the truck can play the sound and turn on the headlight, enhance kids' gaming fun. The truck toys will bring lots of joy and surprise to the children! Please be assured that every time you press the button, the whistle will only last for about 8 seconds, don't worry about it making noise." 
  },
  { 
    id: 24, 
    name: "BIG CARRIER TRUCKS WITH SMALL CARS || YELLOW CONSTRUCTUN TRUCK", 
    price: 999.00, image: "https://toycker.com/cdn/shop/files/H4419a42eab6841aebce63958a99cdcfcr_1.jpg?v=1759401878&width=720", 
    description: "Real Sound Effect and Light: Press the button above the truck can play the sound and turn on the headlight, enhance kids' gaming fun. The truck toys will bring lots of joy and surprise to the children! Please be assured that every time you press the button, the whistle will only last for about 8 seconds, don't worry about it making noise." 
  },
  { 
    id: 25, 
    name: "BIG CARRIER TRUCKS WITH SMALL CARS || BLACK POLICE", 
    price: 999.00, image: "https://toycker.com/cdn/shop/files/Hf1b19f8ab4744b75a46856dfee8193cbi.jpg?v=1759399516&width=720", 
    description: "Real Sound Effect and Light: Press the button above the truck can play the sound and turn on the headlight, enhance kids' gaming fun. The truck toys will bring lots of joy and surprise to the children! Please be assured that every time you press the button, the whistle will only last for about 8 seconds, don't worry about it making noise." 
  },
  { 
    id: 26, 
    name: "BIG CARRIER TRUCKS WITH SMALL CARS || PINK TRANSPORT TRUCK", 
    price: 999.00, image: "https://toycker.com/cdn/shop/files/717_CIRlyoL._SX522.jpg?v=1759400791&width=480", 
    description: "Real Sound Effect and Light: Press the button above the truck can play the sound and turn on the headlight, enhance kids' gaming fun. The truck toys will bring lots of joy and surprise to the children! Please be assured that every time you press the button, the whistle will only last for about 8 seconds, don't worry about it making noise." 
  },
  { 
    id: 27, 
    name: "BIG CARRIER TRUCKS WITH SMALL CARS || GREEN ARMY TRUCK", 
    price: 999.00, image: "https://toycker.com/cdn/shop/files/Hd3404efb0a1f45a88835714eb98c3221n.jpg?v=1759400684&width=720", 
    description: "Real Sound Effect and Light: Press the button above the truck can play the sound and turn on the headlight, enhance kids' gaming fun. The truck toys will bring lots of joy and surprise to the children! Please be assured that every time you press the button, the whistle will only last for about 8 seconds, don't worry about it making noise." 
  },


  // { 
  //   id: 7, 
  //   name: "", 
  //   price: , image: "", 
  //   description: "" 
  // },



];





// ==============================================================================================================================================================
// ==============================================================================================================================================================
// ==============================================================================================================================================================



// Show product cards
const main = document.querySelector('main');
main.innerHTML = products.map(product => `
<div
  class="group relative overflow-hidden hover:shadow-pink-300/60 hover:scale-[1] transition-all  cursor-pointer"
  onclick="openProduct(${product.id})"
>
  <!-- 🧸 Product Image -->
  <div class="relative w-full aspect-square overflow-hidden rounded-lg">
   <img
      src="${product.image}"
      a lt="${product.name}"
      class="w-full h-full object-cover transition-transform duration-200 duration-[1500ms] ease-out group-hover:scale-110"
    />
  </div>

  <!-- 💬 Content -->
  <div class="pt-2 pb-4 text-center">

    <h2 class="text-md font-semibold pb-2 text-blue group-hover:text-pink-900 transition">
      ${product.name}
    </h2>

<div class="flex items-center gap-2">
  <!-- Price -->
  <p class="text-white bg-blue-800 p-1 rounded-md font-bold text-lg tracking-wide w-1/2 text-center">
    ₹${product.price}
  </p>

  <!-- Buy Now Button -->
  <button class="w-1/2 text-white bg-blue-800 p-1 rounded-md font-bold text-lg tracking-wide w-1/2 text-center">
    BUY
  </button>
</div>

  </div>

  <!-- ✨ Decorative Glow -->
  <div
    class="absolute inset-0 rounded-3xl bg-gradient-to-b from-pink-200/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 pointer-events-none"
  ></div>
</div>


`).join('');

// Navigate to product page
function openProduct(id) {
  localStorage.setItem('selectedProduct', JSON.stringify(products.find(p => p.id === id)));
  window.location.href = 'product.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    let currentIndex = 0;
    const intervalTime = 2000; // 2 seconds

    function goToSlide(index) {
        if (index >= slideCount) {
            currentIndex = 0; // Loop back to the first slide
        } else if (index < 0) {
            currentIndex = slideCount - 1; // Go to the last slide
        } else {
            currentIndex = index;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function autoScroll() {
        currentIndex++;
        goToSlide(currentIndex);
    }

    // Start auto-scrolling
    setInterval(autoScroll, intervalTime);
});


