//Token variables
var data = '%data%';
var $header = $('#header');
var $topContacts = $('#topContacts');
var $footerContacts = $('#footerContacts');
var $skills = $('#skills');

//All biographic details, only linkedin and github needs to have links, linkedin replaces twitter
var bio = {
  'name': 'Federica Albissola',
  'role': ' Front-end Web Developer',
  'contacts': {
    'mobile': '+49 172 6946571',
    'email': 'federica_albissola@yahoo.de',
    'github': ['Federica73', 'https://github.com/Federica73'],
    'linkedin': ['Public Profile', 'http://de.linkedin.com/in/albissola'],
    'location': 'Munich, Germany',
  },
  'biopic': 'images/federica_linkedin.jpg',
  'welcomeMessage': 'From Regulatory Affairs Manager to Web Developer: please take a glance',
  'skills': ['Pharmaceutical Industry', 'Teaching', 'HTML and CSS', 'Document Management System']
};
//Order and format in which the biographical information are displayed
bio.display = function() {

  var formattedName = HTMLheaderName.replace(data, bio.name);
  var formattedRole = HTMLheaderRole.replace(data, bio.role);
  $header.prepend(formattedRole).prepend(formattedName);

  var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
  var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
  var formattedGithub = HTMLgithub.replace(data, bio.contacts.github[0]).replace('#', bio.contacts.github[1]);
  var formattedLinkedin = HTMLlinkedin.replace(data, bio.contacts.linkedin[0]).replace('#', bio.contacts.linkedin[1]);
  $topContacts.append(formattedMobile)
    .append(formattedEmail)
    .append(formattedGithub)
    .append(formattedLinkedin)
    .append(formattedLocation);

  //All the contacts need to be displayed in both header and footer
  $footerContacts.append(formattedMobile)
    .append(formattedEmail)
    .append(formattedGithub)
    .append(formattedLinkedin)
    .append(formattedLocation);

  var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
  $('.col-4').append(formattedBiopic);

  if (bio.skills.length > 0) {
    $skills.append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace(data, skill);
      $skills.append(formattedSkill);
    });
  }

  //Welcome message at the end, as an opening of the displayed information
  var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
  $header.append(formattedWelcome);
};
//Let display the biographical data on the page
bio.display();

//Work experience
//Array for location is present when employer location is different from job location and/or residence
var work = {
  'jobs': [{
    'employer': ['Medpace', 'http://www.medpace.com/'],
    'title': 'Regulatory Affairs Manager',
    'dates': 'January 2016 - future',
    'location': 'Munich, Germany',
    'description': 'Support all stages of the drug development process.'
  }, {
    'employer': ['Viforpharma', 'http://www.viforpharma.com/en/'],
    'title': 'Regulatory Affairs Manager',
    'dates': 'August 2013 - September 2014',
    'location': ['Glattbrugg, Switzerland', 'Zurich, Switzerland'],
    'description': '<li>Led the registration of one pharmaceutical product with alternative submission strategy in Australia.</li>' + '<li>Supported the technical team determining the most competitive registration strategy in Asian Pacific.</li>' + '<li>Coordinated customers and authorities quality queries.</li>'
  }, {
    'employer': ['Sandoz', 'http://www.sandoz.com/'],
    'title': 'Project Manager Regulatory Affairs',
    'dates': 'January 2007 - July 2013',
    'location': ['Holzkirchen, Germany', 'Munich, Germany'],
    'description': '<li>Performed due diligence of registration files (pharmaceuticals and medical devices, 15 products yearly) for worldwide scope.</li>' + '<li>Coordinated as DRA (Drug Regulatory Affairs) project manager registration activities worldwide for 10 products yearly.</li>' + '<li>Performed registration procedures as single point of contact for regulatory authorities for an average of 20 products yearly.</li>' + '<li>Prepared and held trainings online and on-site, enhancing the understanding of complex regulations  and innovative registration strategies.</li>'
  }, {
    'employer': ['Torrent Pharma', 'http://www.torrentpharma.com/'],
    'title': 'Regulatory Affairs Manager',
    'dates': 'November 2005 - December 2006',
    'location': 'Nuremberg, Germany',
    'description': '<li>Involved in due diligences within the international due diligence team and initiated new customers acquisitions for the South-European business development activities.</li>' + '<li>Reviewed registration files for products developed in India, preparing and seeking scientific advice.</li>'
  }, {
    'employer': ['Siegfried', 'http://www.siegfried.ch/'],
    'title': 'Regulatory Affairs Manager',
    'dates': 'December 2002 - July 2004',
    'location': ['Zofingen, Switzerland', 'Zurich, Switzerland'],
    'description': '<li>Contributed to the registration of one of the company major generic products in cardiovascular therapeutic area.</li>' + '<li>Supported customers (pharmaceutical companies) during registration activities: coordinated internal departments, clinical- toxicological experts and suppliers.</li>'
  }, {
    'employer': ['LSMW (now M+W Central Europe)', 'http://www.centraleurope.mwgroup.net/en/home/'],
    'title': 'Validation Engineer',
    'dates': 'August 2000 - October 2002',
    //insert if else in helper for the case location is not a string, but an array
    'location': ['Stuttgart, Germany', 'Starogard Gdansky, Poland', 'Vienna, Austria', 'Biberach an der Riß, Germany'],
    'description': 'Trained as computer validation engineer, on-site consultant mainly for equipment at:<br/>' + '<li>Boehringer Ingelheim, Biberach an der Riß (Germany)</li>' + '<li>Octapharma, Vienna (Austria)</li>' + '<li>Aventis Behring (now CSL Behring), Vienna (Austria)</li>' + '<li>Polpharma, Starogard Gdansky (Poland)</li>'
  }]
};

work.display = function() {
  for (var indexNum = 0, len = work.jobs.length; indexNum < len; indexNum++) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[indexNum].employer[0]).replace('#', work.jobs[indexNum].employer[1]);
    $('.work-entry:last').append(formattedEmployer);
    var formattedDates = HTMLworkDates.replace(data, work.jobs[indexNum].dates);
    $('.work-entry:last').append(formattedDates);
    //to cover the case where employer is located in a place different from the one I was living*/
    var formattedLocation;
    if (Array.isArray(work.jobs[indexNum].location)) {
      formattedLocation = HTMLworkLocation.replace(data, work.jobs[indexNum].location[0]);
    } else {
      formattedLocation = HTMLworkLocation.replace(data, work.jobs[indexNum].location);
    }
    //left if else given the length of variables
    $('.work-entry:last').append(formattedLocation);
    var formattedTitle = HTMLworkTitle.replace(data, work.jobs[indexNum].title);
    $('.work-entry:last').append(formattedTitle);
    var formattedDescription = HTMLworkDescription.replace(data, work.jobs[indexNum].description);
    $('.work-entry:last').append(formattedDescription);
  }
};
//Let display the biographical data on the page
work.display();

//The projects are not yet existing,therefore links will be added later
var projects = {
  'projects': [{
    'title': 'Project 3 Classic Arcade Game Clone',
    'dates': 'February-March 2016',
    'description': 'Recreate the classic arcade game Frogger, starting with provided visual assets and a game loop engine.',
    //TODO replace image of project 3 once submitted
    'images': ['images/197x148.gif', 'images/197x148.gif']
  }, {
    'title': 'Project 4 Website Optimization',
    'dates': 'March-April 2016',
    'description': 'Optimization of a provided website achieving a target PageSpeed score and runs at 60 frames per second.',
    //TODO replace image of project 4 once submitted
    'images': ['images/197x148.gif', 'images/197x148.gif']
  }]
};

projects.display = function() {
  for (var indexNum = 0, len = projects.projects.length; indexNum < len; indexNum++) {
    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[indexNum].title);
    $('.project-entry:last').append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace(data, projects.projects[indexNum].dates);
    $('.project-entry:last').append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[indexNum].description);
    $('.project-entry:last').append(formattedDescription);
    if (projects.projects[indexNum].images.length > 0) {
      projects.projects[indexNum].images.forEach(function(image) {
        var formattedImages = HTMLprojectImage.replace(data, image);
        $('.project-entry:last').append(formattedImages);
        });
    }
  }
};

projects.display();

var education = {
  'schools': [{
    'name': 'Vlerick Leuven Gent Management School',
    'location': 'Leuven, Belgium',
    'degree': 'MBA',
    //TODO: majors to be deleted afterwards, since invented.Not present in my education
    'majors': ['International Business','Entrepreneurship'],
    'dates': 'August 2004 - July 2005',
    'url': 'http://www.vlerick.com/en'

  }, {
    'name': 'Università degli Studi di Genova',
    'location': 'Genoa, Italy',
    'dates': 'October  1992 - June 1998',
    'degree': 'Master of Science in Chemical Engineering',
    //TODO: majors to be deleted afterwards, since invented.Not present in my education
    'majors': ['Process Engineering','Food Technology'],
    'url': 'https://www.unige.it/'
  }],
  'onlineCourses': [{
    'title': 'Introduction to computer science and programming using Python',
    'school': 'EDX - MITx',
    'date': 'August 2015 - October 2015',
    'url': ['Introduction to Computer Science', 'https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-6']
  }, {
    'title': 'Front-end web developer nanodegree',
    'school': 'Udacity',
    'date': 'November 2015 - future',
    'url': ['Front End Web Developer', 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001']
  }]
};

education.display = function() {
  for (var indexNum = 0, len = education.schools.length; indexNum < len; indexNum++) {
    $('#education').append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace(data, education.schools[indexNum].name).replace('#', education.schools[indexNum].url);
    $('.education-entry:last').append(formattedSchoolName);
    var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[indexNum].dates);
    $('.education-entry:last').append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[indexNum].location);
    $('.education-entry:last').append(formattedSchoolLocation);
    var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[indexNum].degree);
    $('.education-entry:last').append(formattedSchoolDegree);
    // TO DO: majors to be deleted afterwards
    //added array.prototype.join() to format majors in an string and have space between the two majors
    var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[indexNum].majors.join(', '));
    $('.education-entry:last').append(formattedSchoolMajor);
  }

  if (education.onlineCourses.length > 0) {
    $('#education').append(HTMLonlineClasses);
    for (indexNum = 0, len = education.onlineCourses.length; indexNum < len; indexNum++) {
      $('#education').append(HTMLschoolStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[indexNum].title);
      $('.education-entry:last').append(formattedOnlineTitle);
      var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[indexNum].date);
      $('.education-entry:last').append(formattedOnlineDates);
      var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[indexNum].school);
      $('.education-entry:last').append(formattedOnlineSchool);
      var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[indexNum].url[0]).replace('#', education.onlineCourses[indexNum].url[1]);
      $('.education-entry:last').append(formattedOnlineURL);
    }

  }
};
education.display();

//Internationalize name of Lesson 2 removed

//insert map
$('#mapDiv').append(googleMap);