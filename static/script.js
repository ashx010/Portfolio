$(document).ready(function () {
    setTimeout(() => {
        $('ul.navpanel a').css('box-shadow', 'rgba(0, 0, 0, 1) 5px 4px 10px, rgba(255, 255, 255, 0.4) -3px -2px 5px');
        $('.container-fluid').css('box-shadow', 'rgba(0, 0, 0, 0.8) 10px 10px 10px inset, rgba(255, 255, 255, 0.4) -6px -6px 15px inset');
    }, 300);
});

$(document).ready(function () {
    const titles = ['Web Developer', 'Data Science Enthusiast', 'Machine Learning Engineer', 'Data Analyst', 'Software Developer'];
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
            }
            else {
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
    $('.nav-collapse-btn').on('click', function () {

        if ($('header .nav.navpanel').hasClass('show')) {
            $('body').css('overflow', 'unset');
            setTimeout(() => {
                $('header .nav-collapse .navpanel').removeClass('show');
            }, 100);
            setTimeout(() => {
                $('header .nav-collapse').css('width', '2%');
            }, 400);
            setTimeout(() => {
                $('header .nav-collapse').css('background', 'linear-gradient(162deg, rgb(0 135 255) 0%, rgb(153, 255, 0) 100%)');
                $('header .nav-collapse').css('height', '10%');
            }, 650);
            setTimeout(() => {
                $('header .nav-collapse').css('rotate', '0deg');
            }, 1000);
            setTimeout(() => {
                $('header .nav-collapse').css('transform', 'translateY(1000%)');
            }, 1300);
        }
        else {
            $('body').css('overflow', 'hidden');
            setTimeout(() => {
                $('header .nav-collapse').css('transform', 'translateY(0%)');
            }, 100);
            setTimeout(() => {
                $('header .nav-collapse').css('rotate', '360deg');
            }, 300);
            setTimeout(() => {
                $('header .nav-collapse').css('height', '100%');
            }, 600);
            setTimeout(() => {
                $('header .nav-collapse').css('background', 'unset');
                $('header .nav-collapse').css('width', '80%');
            }, 1000);
            setTimeout(() => {
                $('header .nav-collapse .navpanel').addClass('show');
            }, 1300);
        }


    });

    // window size properties on change
    var windowWidth = $(window).width();
    $(window).on('resize', function () {
        if (Math.abs($(window).width() - windowWidth) > 350) {
            location.reload();
        }
    });
    $('header .nav-collapse .navpanel li a').on('click', function () {
        if ($(window).width() <= 450) {
            $('body').css('overflow', 'unset');
            $('.nav-collapse').css('transform', 'translateY(1000%)');

            setTimeout(() => {
                $('header .nav-collapse').css('background', 'linear-gradient(162deg, rgb(0 135 255) 0%, rgb(153, 255, 0) 100%)');
                $('header .nav-collapse').css('width', '2%');
                $('header .nav-collapse').css('height', '10%');
                $('header .nav-collapse').css('rotate', '0deg');
                $('header .nav-collapse .navpanel').removeClass('show');
            }, 300);
        }
    });
});

var projects = {
    "webdev": {
        "project1": {
            "title": "Portfolio",
            "sub-title": "",
            "image": "static/images/portfolioprojectimg.jpg",
            "links": {
                "github": "",
                "redirect": "https://www.profolio.tech",
                "more": ""
            }
        },
        "project2": {
            "title": "Mapping Application",
            "sub-title": "Under Development...",
            "image": "static/images/mappingprojectimg.jpg",
            "links": {
                "github": "",
                "redirect": "https://map.profolio.tech/home.html",
                "more": ""
            }
        },
    },
    "datascience": {
        "project1": {
            "title": "Titanic Survival Prediction",
            "sub-title": "",
            "image": "static/images/titanic.jpg",
            "links": {
                "kaggle": "https://www.kaggle.com/code/ashx010/titanic-data-analysis-and-model-deployment",
                "redirect": "",
                "more": ""
            }
        },
        "project2": {
            "title": "House Pricing Prediction",
            "sub-title": "",
            "image": "static/images/houseprice.jpg",
            "links": {
                "kaggle": "https://www.kaggle.com/code/ashx010/house-price-data-analysis-and-prediction-model",
                "redirect": "",
                "more": ""
            }
        },
        "project3": {
            "title": "Digit Recognizer",
            "sub-title": "",
            "image": "static/images/digitrecognizer.jpg",
            "links": {
                "kaggle": "https://www.kaggle.com/code/ashx010/digit-recognizer/notebook",
                "redirect": "",
                "more": ""
            }
        }
    }
};

var project_category = projects[category];

var projects_cards = $(".projects-all-cards")[0];

var category = 'webdev'; // default to web development

function addprojectcards(project_category, projects_cards, project_code_link, category = 'webdev') {
    for (let i in project_category) {
        var add_project_plate = `
            <div class="project-card">
                <a href='javascript:void(0);' category='${category}' project_number='${i}' class='project-item'>
                    <img src="${project_category[i]['image']}" category='${category}' project_number = '${i}' width="75" alt="project-card"/>
                </a>
            </div>
        `;
        projects_cards.innerHTML += add_project_plate;
    }

    //default open card
    var project = project_category['project1'];
    $(`.project-item[category=${category}][project_number = project1] img`).addClass('active');
    $('.projects-info').attr('projectno', 'project1');
    $('.project-title').text(project['title']);
    $('.project-sub-title').text(project['sub-title']);
    $('.projects-info').attr('category', category);
    $('.projects-info .project-card').css('background', `url(${project['image']})`);
    $('.projects-info .project-card').css('background-position', 'center');
    $('.projects-info .project-card').css('background-size', 'cover');
    $('.projects-info .project-links a').eq(0).attr('href', project['links'][project_code_link]);
    $('.projects-info .project-links a img').eq(0).attr('src', 'static/images/' + project_code_link + '.png');
    $('.project-links a').eq(1).attr('href', project['links']['redirect']);
    $('.project-links a').eq(2).attr('href', project['links']['more']);

    //check links availability
    if (project['links'][project_code_link] == "") {
        $(`.projects-info .project-links a`).eq(0).hide();
    }
    if (project['links']['redirect'] == "") {
        $(`.projects-info .project-links a`).eq(1).hide();
    }
    if (project['links']['more'] == "") {
        $(`.projects-info .project-links a`).eq(2).hide();
    }
    if (project['links'][project_code_link] != "") {
        $(`.projects-info .project-links a`).eq(0).show();
    }
    if (project['links']['redirect'] != "") {
        $(`.projects-info .project-links a`).eq(1).show();
    }
    if (project['links']['more'] != "") {
        $(`.projects-info .project-links a`).eq(2).show();
    }
}

//click event for each card
function bindProjectInfo() {
    $('.project-item').on('click', function () {
        var category = $(this).attr('category');
        $('.project-item img').removeClass("active");
        $(this).find("img").addClass("active");
        var project_category = projects[category];
        var project_code_link = category === 'webdev' ? 'github' : 'kaggle';
        var project_number = $(this).attr('project_number');
        var project = project_category[project_number];
        $('.projects-info').attr('projectno', project_number);
        $('.projects-info').attr('category', category);
        $('.projects-info .project-title').text(project['title']);
        $('.projects-info .project-sub-title').text(project['sub-title']);
        $('.projects-info .project-card').css('background', `url(${project['image']})`);
        $('.projects-info .project-card').css('background-position', 'center');
        $('.projects-info .project-card').css('background-size', 'cover');
        $('.projects-info .project-links a').eq(0).attr('href', project['links'][project_code_link]);
        $('.projects-info .project-links a img').eq(0).attr('src', 'static/images/' + project_code_link + '.png');
        $('.projects-info .project-links a').eq(1).attr('href', project['links']['redirect']);
        $('.projects-info .project-links a').eq(2).attr('href', project['links']['more']);

        //check links availability
        if (project['links'][project_code_link] == "") {
            $(`.projects-info .project-links a`).eq(0).hide();
        }
        if (project['links']['redirect'] == "") {
            $(`.projects-info .project-links a`).eq(1).hide();
        }
        if (project['links']['more'] == "") {
            $(`.projects-info .project-links a`).eq(2).hide();
        }
        if (project['links'][project_code_link] != "") {
            $(`.projects-info .project-links a`).eq(0).show();
        }
        if (project['links']['redirect'] != "") {
            $(`.projects-info .project-links a`).eq(1).show();
        }
        if (project['links']['more'] != "") {
            $(`.projects-info .project-links a`).eq(2).show();
        }
    });
}

$(document).ready(function () {
    //default show webdev projects-1
    var project_category = projects[category];
    var projects_cards = $(".projects-all-cards")[0];

    addprojectcards(project_category, projects_cards, 'github', category);
    bindProjectInfo();

    $('.projects-content .tech-link').on('click', function () {
        var category = $(this).attr('category');
        $('.projects-content .tech-link').removeClass("active");
        $(this).addClass("active");
        projects_cards.innerHTML = '';
        var project_category = projects[category];
        var project_code_link = category === 'webdev' ? 'github' : 'kaggle';
        addprojectcards(project_category, projects_cards, project_code_link, category);
        bindProjectInfo();
    });

    $('.projects-slider .arrow').on('click', function () {
        var action = $(this).attr('action');
        var category = $('.projects-info').attr('category');
        var projectno = $('.projects-info').attr('projectno');
        var project_category = projects[category];
        var objkeys = Object.keys(project_category);
        var max_projects = objkeys.length;
        var scrollAmount = 0;

        if ($(window).width() >= 800) {
            scrollAmount = $(".projects-all-cards .project-card img").height() + 32;
        } else {
            scrollAmount = $(".projects-all-cards .project-card img").width() + 32;
        }

        if (action == "up") {
            projectno = parseInt(projectno.slice(-1)) - 1;
            if (projectno < 1) {
                projectno = max_projects;
                if ($(window).width() >= 800) {
                    $('.projects-all-cards').scrollTop(1000);
                } else {
                    $('.projects-all-cards').scrollLeft(1000);
                }
            }
            else {
                if ($(window).width() >= 800) {
                    $('.projects-all-cards').scrollTop($('.projects-all-cards').scrollTop() - scrollAmount);
                } else {
                    $('.projects-all-cards').scrollLeft($('.projects-all-cards').scrollLeft() - scrollAmount);
                }
            }
        }
        else {
            projectno = parseInt(projectno.slice(-1)) + 1;
            if (projectno > max_projects) {
                projectno = 1;
                if ($(window).width() >= 800) {
                    $('.projects-all-cards').scrollTop(0);
                } else {
                    $('.projects-all-cards').scrollLeft(0);
                }
            }
            else {
                if ($(window).width() >= 800) {
                    $('.projects-all-cards').scrollTop($('.projects-all-cards').scrollTop() + scrollAmount);
                } else {
                    $('.projects-all-cards').scrollLeft($('.projects-all-cards').scrollLeft() + scrollAmount);
                }
            }
        }
        $('.projects-info').attr('projectno', projectno);
        $(`.project-item[category=${category}][project_number=project${projectno}]`).click();
    });
});

var skills = {
    'webdev': {
        'name': 'Web Development',
        'skills': {
            'self': 'static/images/webdevskillscover.jpg',
            'HTML': 'static/images/icons8-html-96.png',
            'CSS': 'static/images/icons8-css-96.png',
            'JavaScript': 'static/images/icons8-js-96.png',
            'Python': 'static/images/icons8-python-96.png',
            'PHP': 'static/images/icons8-php-96.png',
            'JQuery': 'static/images/jquery.png',
            'Django': 'static/images/django.png',
            'REST API': 'static/images/rest-api.png',
            'MySQL': 'static/images/sql.png',
            'Git': 'static/images/git.png',
        }
    },
    'datascience': {
        'name': 'Data Science',
        'skills': {
            'self': 'static/images/datascienceskillscover.jpg',
            'Python': 'static/images/icons8-python-96.png',
            'Pandas': 'static/images/pandas.png',
            'Machine Learning': 'static/images/machine-learning.png',
            'Data Analysis': 'static/images/data-analysis.png',
            'Data Visualization': 'static/images/data-visual.png',
            'NLP': 'static/images/nlp.png',
            'Neural Networks': 'static/images/neural-network.png',
            'Deep Learning': 'static/images/deep-learning.png',
            'Tensorflow': 'static/images/tensorflow.png',
            'Computer Vision': 'static/images/computer-vision.png',
            'Image Processing': 'static/images/image-processing.png',
            'Web Scraping': 'static/images/web-scraping.png',
        }
    }
};

function techstack(category) {
    var skills_category = skills[category]['skills'];
    var skills_cards = $(".skills-info .skill-outerring")[0];
    var total_skills = Object.keys(skills_category).length - 1;
    var skillNames = Object.keys(skills_category);
    skills_cards.innerHTML = '';
    var angle = 360 / total_skills;
    var distance = 200;

    if ($(window).width() <= 350) {
        distance = 100;
    } else if ($(window).width() <= 375) {
        distance = 125;
    } else if ($(window).width() <= 450) {
        distance = 125;
    } else if ($(window).width() <= 800) {
        distance = 200;
    }

    if (total_skills % 2 == 0) {
        angle = 360 / (total_skills + 1);
    } else {
        angle = 360 / total_skills;
    }

    let j = 0;
    for (let i in skills_category) {
        const rotation = angle * j; // Calculate rotation angle
        const translateX = i === 'self' ? 0 : distance * Math.cos(rotation * Math.PI / 180); // Calculate X coordinate
        const translateY = i === 'self' ? 0 : distance * Math.sin(rotation * Math.PI / 180);
        var add_skill_plate = `
            <img src="${skills_category[i]}" skill_name="${i === 'self' ? 'center-image' : skillNames[j]}" class='${i === 'self' ? 'center-image' : 'image-item'}' alt="${i}" category=${i === 'self' ? category : 'skillitem'} style="transform: translate(${translateX}px, ${translateY}px);">
        `;
        skills_cards.innerHTML += add_skill_plate;
        j++;
    }
}

function changeskillname() {
    $('.skills-info .image-item').on('mouseenter', function () {
        // Mouse enter event
        var skillname = $(this).attr('skill_name');
        $('.skills-content .skill-name-displace .skill-name .gradient-text').text(skillname);
        $('.skills-info img.center-image').attr('src', $(this).attr('src'));
    }).on('mouseleave', function () {
        // Mouse leave event
        var category = $('.skills-info .center-image').attr('category');
        $('.skills-content .skill-name-displace .skill-name .gradient-text').text(skills[category]['name']);
        $('.skills-info img.center-image').attr('src', skills[category]['skills']['self']);
    });
}

function clickskillname() {
    if ($(window).width() <= 800) {
        $('.skills-info .image-item').on('click', function () {
            // Mouse enter event
            var skillname = $(this).attr('skill_name');
            $('.skills-content .skill-name-displace .skill-name .gradient-text').text(skillname);
            $('.skills-info img.center-image').attr('src', $(this).attr('src'));
            setTimeout(() => {
                var category = $('.skills-info .center-image').attr('category');
                $('.skills-content .skill-name-displace .skill-name .gradient-text').text(skills[category]['name']);
                $('.skills-info img.center-image').attr('src', skills[category]['skills']['self']);
            }, 1000);
        });
    }
}

$(document).ready(function () {
    $('.center-image').attr('src', skills['webdev']['self']);
    $('.skills-content .skill-name-displace .skill-name .gradient-text').text('Web Development');
    techstack('webdev');
    if ($(window).width() <= 800) {
        clickskillname();
    }
    else {
        changeskillname();
    }
    $('.skills-showcase .arrow').on('click', function () {
        $('.skills-info .image-item').addClass('animate');
        var action = $(this).attr('action');
        var category = $('.skills-info .center-image').attr('category');
        var skillscatlist = Object.keys(skills);
        var currentindex = skillscatlist.indexOf(category);
        currentindex = action === 'up' ? currentindex - 1 : currentindex + 1;
        if (currentindex < 0) {
            currentindex = skillscatlist.length - 1;
        }
        else if (currentindex > skillscatlist.length - 1) {
            currentindex = 0;
        }
        let categorynow = skillscatlist[currentindex];
        $('.skills-content .skill-name-displace .skill-name .gradient-text').text(skills[categorynow]['name']);
        setTimeout(() => {
            techstack(categorynow);
            if ($(window).width() <= 800) {
                clickskillname();
            }
            else {
                changeskillname();
            }
        }, 1000);

    });
});

$(document).ready(function () {
    var exp = {
        "exp2": {
            "company": "Mapping DigiWorld",
            "role": "Backend Developer Intern",
            "duration": "Sept, 2023 : Feb, 2024",
            "location": "Noida, UP, India",
            "desc": ["Maintain and develop mapping applications using HTML, CSS, JavaScript & jQuery to map GeoJson data.", " Developed robust admin and CMS panels using Python Django & MYSQL.", " Dynamic websites using PHP as a leverage to make effective and traditional backend functionality.", " Developing strategies to improve performance."]
        },
        "exp1": {
            "company": "IBM",
            "role": "Training",
            "duration": "Aug 2022",
            "location": "ADGITM, Delhi, India",
            "desc": ["I have acquired skills and knowledge on Machine Learning, Python, and Data Science.", " Create Projects using different types of data and different machine learning models.", " Preprocess, Visualize and Analyze data to gain better understanding of data and improve model."]
        }
    };

    var edu = {
        "edu3": {
            "college": "ADGITM",
            "degree": "B.Tech, CSE",
            "duration": "2020 : 2024",
            "location": "Delhi, India",
            "desc": "GPA : 8.5"
        },
        "edu2": {
            "college": "St. Lawrence Convent",
            "degree": "12 <sup>th</sup> Grade",
            "duration": "2019-2020",
            "location": "Delhi, India",
            "desc": ""
        },
        "edu1": {
            "college": "St. Lawrence Convent",
            "degree": "10 <sup>th</sup> Grade",
            "duration": "2017-2018",
            "location": "Delhi, India",
            "desc": ""
        }
    };

    var expedu = $("#expedu .expedu-showcase")[0];

    function switchexpedu(category) {
        expedu.innerHTML = '';
        var k = 0;
        var expedu_category = category === 'exp' ? exp : edu;
        var show_line = `<div class="expedu-line"></div>`;
        $(show_line).appendTo(expedu);
        for (let i in expedu_category) {
            var add_exp_edu_plate = `
                <div expedu_number="${i}" class="expedu-row">
                    <div class="expedu-box">
                        <div class="box-content ${category}">
                            <div class="head">${expedu_category[i]['company'] || expedu_category[i]['college']}</div>
                            <div class="sub-head" >${expedu_category[i]['role'] || expedu_category[i]['degree']}</div>
                            <div class="sub-head" >${expedu_category[i]['duration']}</div>
                            <div class="sub-head" >${expedu_category[i]['location']}</div>
                        </div>
                    </div>
                    <div class="expedu-circle">
                        <div class="circle-img" style="${category === 'exp' ? "background: url('static/images/experience.png'); background-size: cover; background-position: center;" : "background: url('static/images/education.png'); background-size: cover; background-position: center;"}"></div>
                    </div>
                </div>`;
            $(add_exp_edu_plate).appendTo(expedu);
            if (category === 'exp') {
                for (let el1 = 0; el1 < expedu_category[i]['desc'].length; el1++) {
                    $('.expedu-row[expedu_number=' + i + '] .box-content.' + category).append(`<div class="body-content">${el1 + 1}: ${expedu_category[i]['desc'][el1]}</div>`);
                }
            } else if (category === 'edu') {
                $('.expedu-row[expedu_number=' + i + '] .box-content.' + category).append(`<div class="body-content">${expedu_category[i]['desc']}</div>`);
            }
            let h_showcase = $('#expedu .expedu-showcase').height();
            let h_line = h_showcase;
            $('#expedu .expedu-showcase .expedu-line').css('height', `${h_line}px`);
            if (category === 'exp') {
                if (k % 2 !== 0) {
                    $('.expedu-row').eq(k).addClass('right');
                }
            } else if (category === 'edu') {
                if (k % 2 === 0) {
                    $('.expedu-row').eq(k).addClass('right');
                }
            }
            k++;
        }
        $('#expedu .expedu-box').addClass('has-scrollbar');
    }

    //default show experience
    switchexpedu('exp');

    $('#expedu .expedu-content .expedu-link').on('click', function () {
        var category = $(this).attr('category');
        $('#expedu .expedu-content .expedu-link').removeClass("active");
        $(this).addClass("active");
        switchexpedu(category);
    });
});

$(document).ready(function () {
    $('#contact-me').on('submit', function (e) {
        e.preventDefault();
        let form = $(this);
        let name = $('#contact-me input[name="name"]').val();
        let email = $('#contact-me input[name="email"]').val();
        let message = $('#contact-me textarea[name="message"]').val();
        var formdata = {
            'name': name,
            'email': email,
            'message': message
        };
        $.ajax({
            url: 'main.php',
            type: 'POST',
            data: JSON.stringify(formdata), // Send data as JSON string
            contentType: 'application/json',
            dataType: 'json',
            beforeSend: function () {
                $('.notification').text('Sending message...');
                $('.notification').show();
            },
            success: function (data) {
                if (data === 'success') {
                    $('.notification').text('Message sent successfully');
                    $('.notification').show();
                    setTimeout(() => {
                        $('.notification').hide();
                    }, 3000);
                    form[0].reset();
                }
                else {
                    $('.notification').text('Message not sent');
                    $('.notification').show();
                    setTimeout(() => {
                        $('.notification').hide();
                    }, 3000);
                }
            },
            error: function (data) {
                $('.notification').text('Message not sent!!');
                $('.notification').show();
                setTimeout(() => {
                    $('.notification').hide();
                }, 3000);
            }
        });
    });
});


$(document).ready(function () {
    let writeIndex = 0;

    function writeTitle() {
        let word = 'Yash Aggarwal';
        if (writeIndex == 0) {
            document.getElementById("preloading-title").innerHTML = ""; // Clear subtitle
        }
        if (writeIndex < word.length) {
            let sub_elem = document.getElementById("preloading-title");
            sub_elem.innerHTML += word[writeIndex];
            writeIndex++;
        }
    }

    setTimeout(() => {
        $('body .preloading .load-square').css('transform', 'translate(0,0)');
        $('body .preloading .load-circle').css('transform', 'translate(0,0)');
    }, 100);
    setTimeout(() => {
        $('body .preloading .load-square').css('rotate', '45deg');
        $('body .preloading .load-circle').css('rotate', '45deg');
        $('body .preloading .load-square').css('background-color', '#33373d');
        $('body .preloading .load-circle').css('background-color', '#33373d');
        setInterval(writeTitle, 150);
    }, 600);
    setTimeout(() => {
        $('body .preloading .load-square').css('box-shadow', '5px 0px 15px #ffffff8a inset, -10px -15px 15px black inset');
        $('body .preloading .load-circle').css('box-shadow', '10px 15px 15px black inset, 0px -5px 15px #ffffff8a inset');
        let w = $(window).width();
        let set_w = w <= 450 ? 75 : w <= 800 ? 60 : 40;
        let set_h = w <= 450 ? 20 : 40;
        $('body .preloading .preloader').css('width',  `${set_w}%`);
        $('body .preloading .preloader').css('height', `${set_h}%`);
        $('body .preloading .preloader').css('z-index', '1000');
    }, 900);
    setTimeout(() => {
        $('body .preloading .load-square').css('filter', 'drop-shadow(0px 0px 20px rgb(0 135 255))');
        $('body .preloading .load-circle').css('filter', 'drop-shadow(0px 0px 20px rgb(153, 255, 0))');
        $('body .preloading .preloader').css('box-shadow', '1px 1px 25px rgb(0 0 0 / 80%)');
    }, 1200);
    setTimeout(() => {
        $('body .preloading .preloader').css('backdrop-filter', 'blur(10px)');
    }, 1500);
    setTimeout(() => {
        $('body .preloading .preloader').css('width', '100%');
        $('body .preloading .preloader').css('height', '100%');
    }, 3000);
    setTimeout(() => {
        $('body .preloading').hide();
        $('body').css('overflow', 'unset');
    }, 4000);

});