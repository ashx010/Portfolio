$(document).ready(function () {
  setTimeout(() => {
    $("ul.navpanel a").css(
      "box-shadow",
      "rgba(0, 0, 0, 1) 5px 4px 10px, rgba(255, 255, 255, 0.4) -3px -2px 5px"
    );
    $(".btn-c").css(
      "box-shadow",
      "rgba(0, 0, 0, 1) 5px 4px 10px, rgba(255, 255, 255, 0.4) -3px -2px 5px"
    );
    $(".container-fluid").css(
      "box-shadow",
      "rgba(0, 0, 0, 0.8) 10px 10px 10px inset, rgba(255, 255, 255, 0.4) -6px -6px 15px inset"
    );
  }, 300);
});

$(document).ready(function () {
  const titles = [
    "Full Stack Web Developer",
    "Data Science Enthusiast",
    "Software Developer",
  ];
  let currentIndex = 0;
  let writeInterval;

  function changeTitle() {
    clearInterval(writeInterval); // Clear previous writeInterval before starting a new title
    let word = titles[currentIndex];
    let writeIndex = 0;

    function writeTitle() {
      if (writeIndex == 0) {
        document.getElementById("home-subtitle").innerHTML = ""; // Clear subtitle
      }
      if (writeIndex < word.length) {
        let sub_elem = document.getElementById("home-subtitle");
        sub_elem.innerHTML += word[writeIndex];
        writeIndex++;
      } else {
        clearInterval(writeInterval); // Clear writeInterval when title is fully written
        currentIndex = (currentIndex + 1) % titles.length; // Move to the next title
        setTimeout(changeTitle, 2000); // Wait 2 seconds before changing to the next title
      }
    }

    writeInterval = setInterval(writeTitle, 150);
  }

  changeTitle(); // Start the initial title change
});

$(document).ready(function () {
  $(".nav-collapse-btn").on("click", function () {
    if ($("header .nav.navpanel").hasClass("show")) {
      $("body").css("overflow", "unset");
      setTimeout(() => {
        $("header .nav-collapse .navpanel").removeClass("show");
      }, 100);
      setTimeout(() => {
        $("header .nav-collapse").css("width", "2%");
      }, 400);
      setTimeout(() => {
        $("header .nav-collapse").css(
          "background",
          "linear-gradient(162deg, rgb(0 135 255) 0%, rgb(153, 255, 0) 100%)"
        );
        $("header .nav-collapse").css("height", "10%");
      }, 650);
      setTimeout(() => {
        $("header .nav-collapse").css("rotate", "0deg");
      }, 1000);
      setTimeout(() => {
        $("header .nav-collapse").css("transform", "translateY(1000%)");
      }, 1300);
    } else {
      $("body").css("overflow", "hidden");
      setTimeout(() => {
        $("header .nav-collapse").css("transform", "translateY(0%)");
      }, 100);
      setTimeout(() => {
        $("header .nav-collapse").css("rotate", "360deg");
      }, 300);
      setTimeout(() => {
        $("header .nav-collapse").css("height", "100%");
      }, 600);
      setTimeout(() => {
        $("header .nav-collapse").css("background", "unset");
        $("header .nav-collapse").css("width", "80%");
      }, 1000);
      setTimeout(() => {
        $("header .nav-collapse .navpanel").addClass("show");
      }, 1300);
    }
  });

  // window size properties on change
  // var windowWidth = $(window).width();
  // $(window).on("resize", function () {
  //   if (Math.abs($(window).width() - windowWidth) > 350) {
  //     location.reload();
  //   }
  // });
  $("header .nav-collapse .navpanel li a").on("click", function () {
    if ($(window).width() <= 450) {
      $("body").css("overflow", "unset");
      $(".nav-collapse").css("transform", "translateY(1000%)");

      setTimeout(() => {
        $("header .nav-collapse").css(
          "background",
          "linear-gradient(162deg, rgb(0 135 255) 0%, rgb(153, 255, 0) 100%)"
        );
        $("header .nav-collapse").css("width", "2%");
        $("header .nav-collapse").css("height", "10%");
        $("header .nav-collapse").css("rotate", "0deg");
        $("header .nav-collapse .navpanel").removeClass("show");
      }, 300);
    }
  });
});

function render_project_list(data, project_code_link) {
  data["project_list"].forEach((project) => {
    var project_card = `
			<div class="projects-info">
				<div class="project-card" style="background: url(${
          project.image
        }); background-size: cover; background-position: center;"></div>
				<h2 class="project-title">${project.title}</h2>
				<span class="project-sub-title">${project.sub_title}</span>
				<div class="project-links">
					${
            project.github_link && project.github_link !== ""
              ? `
					<a href="${project.github_link}" target="_blank">
						<img
							src="static/images/github.png"
							width="45"
							alt="github"
						/>
					</a>
					`
              : ""
          }
					${
            project.project_link && project.project_link !== ""
              ? `
					<a href="${project.project_link}" target="_blank">
						<img
							src= "static/images/${project_code_link}.png"
							width="45"
							alt="${project_code_link}"
						/>
					</a>
					`
              : ""
          }
					${
            true == false
              ? `<a href="javascript:void(0);" target="_blank">
						<img
							src="static/images/more.png"
							width="40"
							alt="more"
						/>
					</a>`
              : " "
          }
				</div>
			</div>
		`;

    $("#projects-showcase").append(project_card);
  });
}

const project_showcase_list = (category) => {
  $.ajax({
    url: "/get-project-data",
    type: "GET",
    data: { category: category },
    contentType: "application/json",
    dataType: "json",
    success: function (data) {
      var project_code_link =
        category === "Data Science" ? "kaggle" : "redirect";
      render_project_list(data, project_code_link);
    },
    error: function (data) {
      console.log("Error in fetching data");
    },
  });
};

const skill_showcase_list = () => {
  $.ajax({
    url: "/get-skill-data",
    type: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (data) {
      var skill_list = data["skill_list"];
      skill_list.forEach((skill) => {
        var skill_card = `
          <div class="skills-info">
            <div class="skill-card" style="background: url(${skill.image}); background-size: cover; background-position: center;"></div>
            <p class="skill-title">${skill.skill_name}</p>
          </div>
        `;
        $("#skills-showcase").append(skill_card);
      });
    },
    error: function (data) {
      console.log("Error in fetching data");
    },
  });
};

$(document).ready(function () {
  // default to web development
  project_showcase_list("Featured");
  $(".projects-content .tech-link").on("click", function () {
    var category = $(this).attr("category");
    if (category !== "Show All") {
      $(".projects-content .tech-link").removeClass("active");
      $(this).addClass("active");
      $("#projects-showcase").empty();
      project_showcase_list(category);
    } else {
      window.location.href = "/projects_showcase";
    }
  });

  //skill showcase
  $("#skills-showcase").empty();
  skill_showcase_list();
});

function render_eduexp_list(category, data) {
  $("#expedu .expedu-showcase").empty();
  var k = 0; // to manipulate sides of boxes
  var show_line = `<div class="expedu-line"></div>`;
  $("#expedu .expedu-showcase").append(show_line);
  let i = 0;
  console.log(data);
  data["expedu_list"].forEach((element) => {
    var add_exp_edu_plate = `
      <div expedu_number="${i}" class="expedu-row">
        <div class="expedu-box">
          <div class="box-content ${category}">
            <div class="head">${
              element.company_name || element.institution_name
            }</div>
            <div class="sub-head" >${element.role || element.degree}</div>
            <div class="sub-head" >
              ${element.start_date} - ${element.end_date}
            </div>
            <div class="sub-head" >${element.location}</div>
            <div class="body-content">${element.description}</div>
          </div>
        </div>
        <div class="expedu-circle">
          <div class="circle-img" style="${
            category === "exp"
              ? "background: url('static/images/experience.png'); background-size: cover; background-position: center;"
              : "background: url('static/images/education.png'); background-size: cover; background-position: center;"
          }">
          </div>
        </div>
      </div>
    `;

    $("#expedu .expedu-showcase").append(add_exp_edu_plate);

    let h_line = $("#expedu .expedu-showcase").height();
    $("#expedu .expedu-showcase .expedu-line").css("height", `${h_line}px`);
    if (category === "exp") {
      if (k % 2 !== 0) {
        $(".expedu-row").eq(k).addClass("right");
      }
    } else if (category === "edu") {
      if (k % 2 === 0) {
        $(".expedu-row").eq(k).addClass("right");
      }
    }
    k++;
    i++;
  });
  $("#expedu .expedu-box").addClass("has-scrollbar");
}

$(document).ready(function () {
  const eduexp_list = (category) => {
    $.ajax({
      url: "/get-expedu-data",
      type: "GET",
      data: { category: category },
      contentType: "application/json",
      dataType: "json",
      success: function (data) {
        render_eduexp_list(category, data);
      },
      error: function (data) {
        console.log("Error in fetching data");
      },
    });
  };

  eduexp_list("exp");

  $("#expedu .expedu-content .expedu-link").on("click", function () {
    var category = $(this).attr("category");
    $("#expedu .expedu-content .expedu-link").removeClass("active");
    $(this).addClass("active");
    eduexp_list(category);
  });
});

$(document).ready(function () {
  $("#contact-me").on("submit", function (e) {
    e.preventDefault();
    let form = $(this);
    let name = $('#contact-me input[name="name"]').val();
    let email = $('#contact-me input[name="email"]').val();
    let message = $('#contact-me textarea[name="message"]').val();
    var formdata = {
      name: name,
      email: email,
      message: message,
    };
    $.ajax({
      url: "/send-data",
      type: "GET",
      data: { name: name, email: email, message: message }, // Send data as JSON string
      contentType: "application/json",
      dataType: "json",
      beforeSend: function () {
        $(".notification").text("Sending message...");
        $(".notification").show();
      },
      success: function (data) {
        if (data.status === true) {
          $(".notification").text("Message sent successfully");
          $(".notification").show();
          setTimeout(() => {
            $(".notification").hide();
          }, 3000);
          form[0].reset();
        } else {
          $(".notification").text("Message not sent");
          $(".notification").show();
          setTimeout(() => {
            $(".notification").hide();
          }, 3000);
        }
      },
      error: function (data) {
        $(".notification").text("Message not sent!!");
        $(".notification").show();
        setTimeout(() => {
          $(".notification").hide();
        }, 3000);
      },
    });
  });
});
