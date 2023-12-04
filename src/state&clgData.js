// shows state and districts list
const statesData = [
    {
        state: "Andhra Pradesh",
        districts: [
            "Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool",
            "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"
        ]
    },
    {
        state: "Chhattisgarh",
        districts: [
            "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur",
            "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir-Champa",
            "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund",
            "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"
        ]
    },
    {
        state: "Goa",
        districts: ["North Goa", "South Goa"]
    },
    {
        state: "Gujarat",
        districts: [
            "Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad",
            "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath",
            "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada",
            "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat",
            "Surendranagar", "Tapi", "Vadodara", "Valsad"
        ]
    },
    {
        state: "Haryana",
        districts: [
            "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar",
            "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal",
            "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"
        ]
    },
    {
        state: "Karnataka",
        districts: [
            "Bagalkot", "Ballari", "Belgaum", "Bengaluru Rural", "Bengaluru Urban", "Bidar",
            "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga", "Coorg", "Dakshina Kannada",
            "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kolar", "Koppal",
            "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi",
            "Uttara Kannada", "Vijayapura", "Yadgir"
        ]
    },
    {
        state: "Kerala",
        districts: [
            "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam",
            "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"
        ]
    },
    {
        state: "Madhya Pradesh",
        districts: [
            "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind",
            "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar",
            "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni",
            "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna",
            "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur",
            "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"
        ]
    },
    {
        state: "Maharashtra",
        districts: [
            "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur",
            "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City",
            "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani",
            "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim",
            "Yavatmal"
        ]
    },
    {
        state: "Odisha",
        districts: [
            "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", 
            "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", 
            "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", 
            "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundergarh"
        ]
    },
    {
        state: "Punjab",
        districts: [
            "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur",
            "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot",
            "Patiala", "Rupnagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Sri Muktsar Sahib", "Tarn Taran"
        ]
    },
    {
        state: "Rajasthan",
        districts: [
            "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi",
            "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer",
            "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh",
            "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"
        ]
    },
    {
        state: "Sikkim",
        districts: [
            "East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"
        ]
    },
    {
        state: "Tamil Nadu",
        districts: [
            "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", 
            "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", 
            "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", 
            "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", 
            "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"
        ]
    },
    {
        state: "Telangana",
        districts: [
            "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", 
            "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem", "Mahabubabad", 
            "Mahbubnagar", "Mancherial", "Medak", "Medchal–Malkajgiri", "Mulugu", "Nagarkurnool", 
            "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", 
            "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", 
            "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"
        ]
    },
    {
        state: "Uttarakhand",
        districts: [
            "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital",
            "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"
        ]
    },
    {
        state: "West Bengal",
        districts: [
            "Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah",
            "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas",
            "Paschim Bardhaman (West Bardhaman)", "Paschim Medinipur (West Medinipur)", "Purba Bardhaman (East Bardhaman)",
            "Purba Medinipur (East Medinipur)", "Purulia", "South 24 Parganas", "Uttar Dinajpur (North Dinajpur)"
        ]
    }
];

localStorage.setItem('statesData', JSON.stringify(statesData));

// shows college names list
const listOfCollegeData =[
    {"institution_name": "ANANTHA LAKSHMI INSTITUTE OF TECHNOLOGY AND SCIENCES",  "district": "Anantapur",  "state": "Andhra Pradesh" 
    },
    { "institution_name": "Jawaharlal Nehru Technological University Anantapur (JNTUA)", "district": "Anantapur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sri Krishnadevaraya University College of Engineering and Technology", "district": "Anantapur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sree Rama Engineering College", "district": "Anantapur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sri Sai Aditya Institute of Science and Technology", "district": "Anantapur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Anantha Lakshmi Institute of Technology and Sciences", "district": "Anantapur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Gates Institute of Technology", "district": "Anantapur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sri Venkatesa Perumal College of Engineering and Technology", "district": "Anantapur", "state": "Andhra Pradesh"
    },
    {  "institution_name": "Sri Krishna Devaraya Engineering College",  "district": "Anantapur",  "state": "Andhra Pradesh" 
    },
    { "institution_name": "Sri Venkateswara University College of Engineering (SVUCE)", "district": "Chittoor", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sree Vidyanikethan Engineering College", "district": "Chittoor", "state": "Andhra Pradesh"
    },
    { "institution_name": "RVS College of Engineering and Technology", "district": "Chittoor", "state": "Andhra Pradesh"
    },
    { "institution_name": "Annamacharya Institute of Technology and Sciences", "district": "Chittoor", "state": "Andhra Pradesh"
    },
    { "institution_name": "Srinivasa Ramanujan Institute of Technology", "district": "Chittoor", "state": "Andhra Pradesh"
    },
    { "institution_name": "Narayana Engineering College", "district": "Chittoor", "state": "Andhra Pradesh"
    },
    { "institution_name": "Siddhartha Institute of Engineering and Technology", "district": "Chittoor", "state": "Andhra Pradesh"
    },
    { "institution_name": "RGM College of Engineering and Technology", "district": "Chittoor", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sri Venkateswara College of Engineering and Technology", "district": "Chittoor", "state": "Andhra Pradesh"
    },
    { "institution_name": "Vemu Institute of Technology", "district": "Chittoor", "state": "Andhra Pradesh"
    },
    { "institution_name": "Aditya Engineering College", "district": "East Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sri Prakash College of Engineering", "district": "East Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "Konaseema Institute of Medical Sciences & Research Foundation", "district": "East Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "GSL Medical College", "district": "East Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "Adikavi Nannaya University College of Engineering & Technology", "district": "East Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "Shyam Institute of Engineering & Technology for Women", "district": "East Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "Aditya Institute of Technology and Management", "district": "East Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "Bonam Venkata Chalamayya Institute of Technology and Science (BVCITS)", "district": "East Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "Acharya Nagarjuna University College of Engineering & Technology", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "AM Reddy Memorial College of Engineering and Technology", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "AMARA Institute of Engineering and Technology", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Bapatla Engineering College", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Chalapathi Institute of Engineering and Technology", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Eswar College of Engineering", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Guntur Engineering College", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "GVR and S College of Engineering and Technology", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Hindu College of Engineering and Technology", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "JNTUK College of Engineering, Narasaraopet", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Krishnaveni Engineering College for Women", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "Nalanda Institute of Technology", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "NRI Institute of Technology", "district": "Guntur", "state": "Andhra Pradesh"
    },
    { "institution_name": "V.R. Siddhartha Engineering College", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "K.L. University", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "Andhra Loyola Institute of Engineering and Technology", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "Potti Sriramulu College of Engineering and Technology", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "Vignan's Foundation for Science, Technology, and Research (Deemed to be University)", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "SRK Institute of Technology", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "Vignan's Nirula Institute of Technology and Science for Women", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "Nova College of Engineering and Technology", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "PB Siddhartha College of Arts and Science", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "Malineni Lakshmaiah Women's Engineering College", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "Nimra College of Engineering and Technology", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "KKR & KSR Institute of Technology and Sciences", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "KL University College of Engineering", "district": "Krishna", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sree Rama Engineering College", "district": "Kurnool", "state": "Andhra Pradesh"
    },
    { "institution_name": "Rayalaseema University College of Engineering", "district": "Kurnool", "state": "Andhra Pradesh"
    },
    { "institution_name": "G. Pulla Reddy Engineering College", "district": "Kurnool", "state": "Andhra Pradesh"
    },
    { "institution_name": "DVR & Dr. HS MIC College of Technology", "district": "Kurnool", "state": "Andhra Pradesh"
    },
    { "institution_name": "Rajeev Gandhi Memorial College of Engineering and Technology", "district": "Kurnool", "state": "Andhra Pradesh"
    },
    { "institution_name": "Anantha Lakshmi Institute of Technology and Sciences", "district": "Kurnool", "state": "Andhra Pradesh"
    },
    { "institution_name": "Santhiram Engineering College", "district": "Kurnool", "state": "Andhra Pradesh"
    },
    { "institution_name": "B.T. College of Computer Science and Engineering", "district": "Kurnool", "state": "Andhra Pradesh"
    },
    { "institution_name": "Golden Valley Integrated Campus", "district": "Kurnool", "state": "Andhra Pradesh"
    },
    { "institution_name": "Narayana Engineering College", "district": "Kurnool", "state": "Andhra Pradesh"
    },
    { "institution_name": "St. John's College of Engineering and Technology", "district": "Kurnool", "state": "Andhra Pradesh"
    },
    { "institution_name": "Narayana Engineering College", "district": "Nellore", "state": "Andhra Pradesh"
    },
    { "institution_name": "RVR & JC College of Engineering", "district": "Nellore", "state": "Andhra Pradesh"
    },
    { "institution_name": "Audisankara College of Engineering and Technology", "district": "Nellore", "state": "Andhra Pradesh"
    },
    { "institution_name": "Gudlavalleru Engineering College", "district": "Nellore", "state": "Andhra Pradesh"
    },
    { "institution_name": "Dadi Institute of Engineering and Technology", "district": "Nellore", "state": "Andhra Pradesh"
    },
    { "institution_name": "Narayana Engineering College", "district": "Nellore", "state": "Andhra Pradesh"
    },
    { "institution_name": "Audisankara College of Engineering for Women", "district": "Nellore", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sree Vidyanikethan Engineering College", "district": "Nellore", "state": "Andhra Pradesh"
    },
    { "institution_name": "KSRM College of Engineering", "district": "Nellore", "state": "Andhra Pradesh"
    },
    { "institution_name": "Gokul Institute of Technology and Sciences", "district": "Nellore", "state": "Andhra Pradesh"
    },
    { "institution_name": "NBKR Institute of Science & Technology", "district": "Nellore", "state": "Andhra Pradesh"
    },
    { "institution_name": "QIS College of Engineering and Technology", "district": "Prakasam", "state": "Andhra Pradesh"
    },
    { "institution_name": "RISE Prakasam Group of Institutions", "district": "Prakasam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Santhiram Engineering College", "district": "Prakasam", "state": "Andhra Pradesh"
    },
    { "institution_name": "St. Ann's College of Engineering and Technology", "district": "Prakasam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Bapatla Women's Engineering College", "district": "Prakasam", "state": "Andhra Pradesh"
    },
    { "institution_name": "PRISM College of Engineering and Technology", "district": "Prakasam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Rami Reddy Subbarami Reddy Engineering College", "district": "Prakasam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Vignan's Institute of Engineering for Women", "district": "Prakasam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Kandula Sreenivasa Reddy Memorial College of Engineering", "district": "Prakasam", "state": "Andhra Pradesh"
    },
    { "institution_name": "GMR Institute of Technology (GMRIT)", "district": "Srikakulam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Aditya Engineering College", "district": "Srikakulam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sri Sivani College of Engineering", "district": "Srikakulam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Srinivasa Institute of Engineering and Technology", "district": "Srikakulam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Bonam Venkata Chalamayya Institute of Technology and Science (BVCITS)", "district": "Srikakulam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sasi Institute of Technology and Engineering", "district": "Srikakulam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Gayatri Vidya Parishad College of Engineering", "district": "Srikakulam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Bhaskar Engineering College", "district": "Srikakulam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Andhra University College of Engineering", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "GITAM Institute of Technology (GIT)", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Gayatri Vidya Parishad College of Engineering (GVPCOE)", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Anil Neerukonda Institute of Technology and Sciences (ANITS)", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Avanthi Institute of Engineering and Technology", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Pydah College of Engineering and Technology", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Raghu Engineering College", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Visakha Institute of Engineering and Technology (VIET)", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Lendi Institute of Engineering and Technology", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Vignan's Institute of Information Technology (VIIT)", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Gayatri Vidya Parishad College for Degree and PG Courses (GVPC)", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "AM Reddy Memorial College of Engineering and Technology", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Visakha Technical Campus", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Gonna Institute of Information Technology and Sciences (GIITS)", "district": "Visakhapatnam", "state": "Andhra Pradesh"
    },
    { "institution_name": "Maharaj Vijayaram Gajapathi Raj College of Engineering (MVGRCE)", "district": "Vizianagaram", "state": "Andhra Pradesh"
    },
    { "institution_name": "Lendi Institute of Engineering and Technology", "district": "Vizianagaram", "state": "Andhra Pradesh"
    },
    { "institution_name": "MRAGR Government Polytechnic", "district": "Vizianagaram", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sri Sivani College of Engineering", "district": "Vizianagaram", "state": "Andhra Pradesh"
    },
    { "institution_name": "St. Mary's Group of Institutions", "district": "Vizianagaram", "state": "Andhra Pradesh"
    },
    { "institution_name": "Chebrolu Engineering College", "district": "Vizianagaram", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sir C R Reddy College of Engineering", "district": "West Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "Ramachandra College of Engineering", "district": "West Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sasi Institute of Technology & Engineering", "district": "West Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "Shri Vishnu Engineering College for Women", "district": "West Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "Swarnandhra College of Engineering & Technology", "district": "West Godavari", "state": "Andhra Pradesh"
    },
    { "institution_name": "Rajiv Gandhi University of Knowledge Technologies (RGUKT)", "district": "YSR Kadapa", "state": "Andhra Pradesh"
    },
    { "institution_name": "JNTUA College of Engineering, Pulivendula", "district": "YSR Kadapa", "state": "Andhra Pradesh"
    },
    { "institution_name": "Annamacharya Institute of Technology and Sciences", "district": "YSR Kadapa", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sree Vidyanikethan Engineering College", "district": "YSR Kadapa", "state": "Andhra Pradesh"
    },
    { "institution_name": "Vidya Jyothi Institute of Technology (VJIT)", "district": "YSR Kadapa", "state": "Andhra Pradesh"
    },
    { "institution_name": "Sree Rama Engineering College", "district": "YSR Kadapa", "state": "Andhra Pradesh"
    },
    { "institution_name": "Kandula Sreenivasa Reddy Memorial College of Engineering", "district": "YSR Kadapa", "state": "Andhra Pradesh"
    },
    { "institution_name": "Padre Conceicao College of Engineering", "district": "North Goa", "state": "Goa"
    },
    { "institution_name": "Don Bosco College of Engineering", "district": "North Goa", "state": "Goa"
    },
    { "institution_name": "Goa College of Engineering", "district": "North Goa", "state": "Goa"
    },
    { "institution_name": "Shree Rayeshwar Institute of Engineering and Information Technology", "district": "North Goa", "state": "Goa"
    },
    { "institution_name": "Agnel Institute of Technology and Design", "district": "North Goa", "state": "Goa"
    },
    { "institution_name": "PCCE - Don Bosco Centre of Learning", "district": "North Goa", "state": "Goa"
    },
    { "institution_name": "Institute of Shipbuilding Technology", "district": "North Goa", "state": "Goa"
    },
    { "institution_name": "Agnel Institute of Technology and Design", "district": "South Goa", "state": "Goa"
    },
    { "institution_name": "Shree Mallikarjun College of Engineering and Technology", "district": "South Goa", "state": "Goa"
    },
    { "institution_name": "Don Bosco College of Engineering", "district": "South Goa", "state": "Goa"
    }
];

localStorage.setItem('listOfCollegeData', JSON.stringify(listOfCollegeData));