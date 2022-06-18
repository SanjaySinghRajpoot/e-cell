let student2020 = [
  {
    ln: "bhatiaayush/",
    name: "Ayush Bhatia",
    post: " President, E-Cell",
    image: "Team/AyushSir.jpg",
  },
  {
    ln: "rithik-pandita-3424b0197/",
    name: "Rithik Panditha",
    post: " Head of Event Management",
    image: "Team/RithikSir.JPG",
  },
  {
    ln: "gaurav-patil-10336917a/",
    name: "Gaurav Patil",
    post: "  Finance Head, E-Cell",
    image: "Team/GauravSir.jpeg",
  },
  {
    ln: "dhananjaypurohit/",
    name: "Dhananjay Purohit",
    post: "Technical Head, E-Cell",
    image: "Team2/DhananjaySir.png",
  },
  {
    ln: "mansi-dalal21/",
    name: "Mansi Dalal",
    post: " Head of Public Relations",
    image: "Team/MansiMam.jpeg",
  },
  {
    ln: "nikita-shrivastava-zs/",
    name: "Nikita Shrivastava",
    post: "  Marketing Head, E-Cell",
    image: "Team/NikitaMam.jpeg",
  },
  {
    ln: "nikita-shrivastava-zs/",
    name: "Aishwarya Agarwal",
    post: "  Head of Creative Writing",
    image: "Team/AishwaryaMam.jpeg",
  },
  {
    ln: "pranav3105/",
    name: "Pranav Gupta",
    post: "Design Lead, E-Cell",
    image: "Team2/PranavSir.png",
  },
  {
    ln: "divanshu-basantani-91537517a/",
    name: "Divanshu Basantani",
    post: "Events Lead, E-Cell",
    image: "Team2/DivanshuSir.jpg",
  },
  {
    ln: "#",
    name: "Prabhleen Kaur",
    post: " Content Lead, E-Cell",
    image: "Team2/PrabhleenMam.png",
  },
  {
    ln: "priyanshiagrawal22/",
    name: "Priyanshi Agrawa",
    post: " Public Relation Lead",
    image: "Team2/PriyanshiMam.png",
  },
  {
    ln: "dheeraj-kumar-bakoriya-69998918b/",
    name: "Dheeraj Bakoriya",
    post: " Media Lead, E-Cell",
    image: "Team2/DheerajSir.jpg",
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
                                                    <p class="lead">${student.post}</p>
                                                    <div class="small-border"></div>
                                        									
                                        										<div class="social">
                                        										
                                        										<a href="https://www.linkedin.com/in/${student.ln}"><i class="fa fa-linkedin fa-lg"></i></a>
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
    post: "President, E-Cell",
    image: "Team/SourabhSir.jpg",
  },
  {
    ln: "sparshsadafal14/",
    name: "Sparsh Sadafal",
    post: "Vice-President, E-Cell",
    image: "Team/SparshSir.JPG",
  },
  {
    ln: "bhatiaayush/",
    name: "Ayush Bhatia",
    post: "Technical Head, E-Cell",
    image: "Team/AyushSir.jpg",
  },
  {
    ln: "gaurav-patil-10336917a/",
    name: "Gaurav Patil",
    post: "Finance Head, E-Cell",
    image: "Team/GauravSir.jpeg",
  },
  {
    ln: "mansi-dalal-ba500718a/",
    name: "Mansi Dalal",
    post: "Head of Public Relations,<br/> E-Cell",
    image: "Team/MansiMam.jpeg",
  },
  {
    ln: "nikita-shrivastava-282415182/",
    name: "Nikita Shrivastava",
    post: "Head of Public Relations,<br/> E-Cell",
    image: "Team/NikitaMam.jpeg",
  },
  {
    ln: "#",
    name: "Rithik Pandita",
    post: "Head of Event Management,<br/> E-Cell",
    image: "Team/RithikSir.JPG",
  },
  {
    ln: "#",
    name: "Adya Trisal",
    post: "Head of Creative Writing,<br/> E-Cell",
    image: "Team/AdyaMam.jpeg",
  },
  {
    ln: "adarsh-agrawal-7448b599/",
    name: "Adarsh Agrawal",
    post: "Head of Digital Marketing,<br/> E-Cell",
    image: "Team/AdarshSir.jpeg",
  },
  {
    ln: "aishwarya-agrawal-67a355137/",
    name: "Aishwarya Agrawal",
    post: "Head of Creative Writing, E-Cell",
    image: "Team/AishwaryaMam.jpeg",
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
                                                    <p class="lead">${student.post}</p>
                                                    <div class="small-border"></div>
                                        									<div class="social">
                                        									
                                        										<a href="https://www.linkedin.com/in/${student.ln}"><i class="fa fa-linkedin fa-lg"></i></a>
                                        									</div>
                                                </div>
                                            </div>
                                            <!-- team close -->
                                        </div>`;
  div2019.innerHTML += element;
}
