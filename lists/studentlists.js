let student2021 = [
  {
    ln: "pranav3105/",
    name: "Pranav Gupta",
    post: " President",
    image: "Team2021/PranavSir.png",
  },
  {
    ln: "divanshu-basantani-91537517a/",
    name: "Divanshu Basantani",
    post: " Head of Event Management",
    image: "Team2021/DivanshuSir.jpg",
  },
  {
    ln: "dhananjaypurohit/",
    name: "Dhananjay Purohit",
    post: "Technical Head",
    image: "Team2021/DhananjaySir.png",
  },
  {
    ln: "#",
    name: "Prabhleen Kaur",
    post: "Head of Creative Writing",
    image: "Team2021/PrabhleenMam.png",
  },
  {
    ln: "priyanshiagrawal22/",
    name: "Priyanshi Agrawal",
    post: "Head of Public Relations",
    image: "Team2021/PriyanshiMam.png",
  },
  {
    ln: "gourav-thadhani-72a6ba115/",
    name: "Gourav Thadhani",
    post: "Head Coordinator",
    image: "Team2021/GouravSir.jpg",
  },
  {
    ln: "saurabh-datta-a7b649192/",
    name: "Saurabh Datta",
    post: "Head Coordinator",
    image: "Team2021/SaurabhSir.jpg",
  },
  {
    ln: "mrityunjay-gupta-117233192/",
    name: "Mrityunjay Gupta",
    post: "Design Lead",
    image: "Team2021/MrityunjaySir.jpg",
  },
  {
    ln: "akash-chakrawarti/",
    name: "Akash Chakrawarti",
    post: "Design Lead",
    image: "Team2021/AkashSir.jpeg",
  },
  {
    ln: "jayeshbhade/",
    name: "Jayesh Bhade",
    post: "Technical Lead",
    image: "Team2021/JayeshSir.jpg",
  },
  {
    ln: "harsh-agrawal-3229501aa/",
    name: "Harsh Agrawal",
    post: "Technical Lead",
    image: "Team2021/HarshSir.jpg",
  },
  {
    ln: "kuldeep-gaur-294176194/",
    name: "Kuldeep Gaur",
    post: "Events & Marketing Lead",
    image: "Team2021/KuldeepSir.jpg",
  },
  {
    ln: "pranjal-sahu-8a70641b0/",
    name: "Pranjal Sahu",
    post: "Events & PR Lead",
    image: "Team2021/PranjalMam.jpg",
  },
  {
    ln: "siddharth-pathak21/",
    name: "Siddharth Pathak",
    post: "Media Lead",
    image: "Team2021/SiddharthSir.jpeg",
  },
  {
    ln: "ruchi-tetwal-a42b7b177/",
    name: "Ruchi Tetwal",
    post: "Media Lead",
    image: "Team2021/RuchiMam.jpg",
  },
  {
    ln: "akshat-mishra-8a0240196/",
    name: "Akshat Mishra",
    post: "Content Team Manager",
    image: "Team2021/AkshatSir.jpg",
  },
  {
    ln: "mihirjain19/",
    name: "Mihir Jain",
    post: "Content Lead",
    image: "Team2021/MihirSir.jpg",
  },
  {
    ln: "shreya-sharma-a71a61195/",
    name: "Shreya Sharma",
    post: "Content Lead",
    image: "Team2021/ShreyaMam.jpg",
  },
  {
    ln: "sachin-sharma-673256198/",
    name: "Sachin Sharma",
    post: "Public Relations Lead",
    image: "Team2021/sachinSir.jpg",
  },
  {
    ln: "harshitabhagat/",
    name: "Harshita Bhagata",
    post: "Public Relations Lead",
    image: "Team2021/HarshitaMam.jpg",
  },
  {
    ln: "aum-mishra-6602a51a1/",
    name: "Aum Mishra",
    post: "Content Lead",
    image: "Team2021/AumSir.jpg",
  },
]

const div2021 = document.getElementById("student2021");
for (student of student2021) {
  let element = ` <div class="col-xl-3 col-lg-4 col-sm-6 mb30 wow fadeInUp">
                                            <!-- team member -->
                                            <div class="de-team-list">
                                                <div class="team-pic">
                                                    <img src="themes/exhibiz/images-event/${student.image}" class="img-responsive" alt="" />
                                                </div>
                                                <div class="team-desc">
                                                    <h3>${student.name}</h3>
                                                    <p class="lead">${student.post}, E-Cell</p>
                                                    <div class="small-border"></div>
                                        									
                                        										<div class="social">
                                        										
                                        										<a href="https://www.linkedin.com/in/${student.ln}" target="_blank"><i class="fa fa-linkedin fa-lg"></i></a>
                                        									</div>
                                        									
                                                </div>
                                            </div>
                                            <!-- team close -->
                                        </div>`;
  div2021.innerHTML += element;
}

let student2020 = [
  {
    ln: "bhatiaayush/",
    name: "Ayush Bhatia",
    post: " President",
    image: "Team2020/AyushSir.jpg",
  },
  {
    ln: "rithik-pandita-3424b0197/",
    name: "Rithik Panditha",
    post: " Head of Event Management",
    image: "Team2020/RithikSir.JPG",
  },
  {
    ln: "gaurav-patil-10336917a/",
    name: "Gaurav Patil",
    post: "Finance Head",
    image: "Team2020/GauravSir.jpeg",
  },
  {
    ln: "dhananjaypurohit/",
    name: "Dhananjay Purohit",
    post: "Technical Head",
    image: "Team2021/DhananjaySir.png",
  },
  {
    ln: "mansi-dalal21/",
    name: "Mansi Dalal",
    post: " Head of Public Relations",
    image: "Team2020/MansiMam.jpeg",
  },
  {
    ln: "nikita-shrivastava-zs/",
    name: "Nikita Shrivastava",
    post: "  Marketing Head",
    image: "Team2020/NikitaMam.jpeg",
  },
  {
    ln: "nikita-shrivastava-zs/",
    name: "Aishwarya Agarwal",
    post: "  Head of Creative Writing",
    image: "Team2020/AishwaryaMam.jpeg",
  },
  {
    ln: "pranav3105/",
    name: "Pranav Gupta",
    post: "Design Lead",
    image: "Team2021/PranavSir.png",
  },
  {
    ln: "divanshu-basantani-91537517a/",
    name: "Divanshu Basantani",
    post: "Events Lead",
    image: "Team2021/DivanshuSir.jpg",
  },
  {
    ln: "#",
    name: "Prabhleen Kaur",
    post: " Content Lead",
    image: "Team2021/PrabhleenMam.png",
  },
  {
    ln: "priyanshiagrawal22/",
    name: "Priyanshi Agrawa",
    post: " Public Relation Lead",
    image: "Team2021/PriyanshiMam.png",
  },
  {
    ln: "dheeraj-kumar-bakoriya-69998918b/",
    name: "Dheeraj Bakoriya",
    post: " Media Lead",
    image: "Team2021/DheerajSir.jpg",
  },
];

const div2020 = document.getElementById("student2020");
for (student of student2020) {
  let element = ` <div class="col-xl-3 col-lg-4 col-sm-6 mb30 wow fadeInUp">
                                            <!-- team member -->
                                            <div class="de-team-list">
                                                <div class="team-pic">
                                                    <img src="themes/exhibiz/images-event/${student.image}" class="img-responsive" alt="" />
                                                </div>
                                                <div class="team-desc">
                                                    <h3>${student.name}</h3>
                                                    <p class="lead">${student.post}, E-Cell</p>
                                                    <div class="small-border"></div>
                                        									
                                        										<div class="social">
                                        										
                                        										<a href="https://www.linkedin.com/in/${student.ln}" target="_blank"><i class="fa fa-linkedin fa-lg"></i></a>
                                        									</div>
                                        									
                                                </div>
                                            </div>
                                            <!-- team close -->
                                        </div>`;
  div2020.innerHTML += element;
}

let student2019 = [
  {
    ln: "sourabh-yadav-collegementor/",
    name: "Sourabh Yadav",
    post: "President",
    image: "Team2020/SourabhSir.jpg",
  },
  {
    ln: "sparshsadafal14/",
    name: "Sparsh Sadafal",
    post: "Vice-President",
    image: "Team2020/SparshSir.JPG",
  },
  {
    ln: "bhatiaayush/",
    name: "Ayush Bhatia",
    post: "Technical Head",
    image: "Team2020/AyushSir.jpg",
  },
  {
    ln: "gaurav-patil-10336917a/",
    name: "Gaurav Patil",
    post: "Finance Head",
    image: "Team2020/GauravSir.jpeg",
  },
  {
    ln: "mansi-dalal-ba500718a/",
    name: "Mansi Dalal",
    post: "Head of Public Relations",
    image: "Team2020/MansiMam.jpeg",
  },
  {
    ln: "nikita-shrivastava-282415182/",
    name: "Nikita Shrivastava",
    post: "Head of Public Relations",
    image: "Team2020/NikitaMam.jpeg",
  },
  {
    ln: "#",
    name: "Rithik Pandita",
    post: "Head of Event Management",
    image: "Team2020/RithikSir.JPG",
  },
  {
    ln: "#",
    name: "Adya Trisal",
    post: "Head of Creative Writing",
    image: "Team2020/AdyaMam.jpeg",
  },
  {
    ln: "adarsh-agrawal-7448b599/",
    name: "Adarsh Agrawal",
    post: "Head of Digital Marketing",
    image: "Team2020/AdarshSir.jpeg",
  },
  {
    ln: "aishwarya-agrawal-67a355137/",
    name: "Aishwarya Agrawal",
    post: "Head of Creative Writing",
    image: "Team2020/AishwaryaMam.jpeg",
  },
  //   {
  //     name: "",
  //     post: "",
  //     image: "",
  //   },
];

const div2019 = document.getElementById("student2019");
for (student of student2019) {
  let element = ` <div class="col-xl-3 col-lg-4 col-sm-6 mb30 wow fadeInUp">
                                            <!-- team member -->
                                            <div class="de-team-list">
                                                <div class="team-pic">
                                                    <img src="themes/exhibiz/images-event/${student.image}" class="img-responsive" alt="" />
                                                </div>
                                                <div class="team-desc">
                                                    <h3>${student.name}</h3>
                                                    <p class="lead">${student.post}, E-Cell</p>
                                                    <div class="small-border"></div>
                                        									<div class="social">
                                        									
                                        										<a href="https://www.linkedin.com/in/${student.ln} target="_blank""><i class="fa fa-linkedin fa-lg"></i></a>
                                        									</div>
                                                </div>
                                            </div>
                                            <!-- team close -->
                                        </div>`;
  div2019.innerHTML += element;
}

const items = document.getElementsByClassName("io");
const overlays = document.getElementsByClassName("overlay")
for (let i = 0; i < items.length; i++) {
  // console.log(items[i])
  // console.log(overlays[i])
  items[i].onmouseover = () => {
    // console.log("over");
    overlays[i].style.opacity = "1";
  };
  items[i].onmouseleave = () => {
    // console.log("out");
    overlays[i].style.opacity = "0";
  };
}
// const body=document.getElementsByTagName('body')[0];
// const wrapper=document.getElementById('wrapper');
// const sectionsponsors = document.getElementById("section-sponsors");
// // const slider = document.getElementsByClassName("tp-fullwidth-forcer");
// // console.log(slider);
// body.style.width=window.innerWidth;
// wrapper.style.width=window.innerWidth;
// // slider.style.width=window.innerWidth;
// sectionsponsors.style.width=window.innerWidth;
// window.addEventListener("resize", function () {
//   console.log(window.innerWidth);
//   // slider.style.width=window.innerWidth;
//   body.style.width=window.innerWidth;
//   wrapper.style.width=window.innerWidth;
//   sectionsponsors.style.width=window.innerWidth;
//   // check width
// });