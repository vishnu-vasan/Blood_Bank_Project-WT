import "./Home.css";
import { Outlet, Link } from "react-router-dom";
const Home = () => {
  var mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <html>
      <span class="totop">
        <button onClick={topBtn} id="myBtn" title="Go to top">
          top
        </button>
      </span>
      <body>
        <div class="sub-header">
          <div class="container-sh">
            <ul class="left-info">
              <li>
                <b>
                  <a href="#overview">Overview</a>
                </b>
              </li>
              <li>
                <b>
                  <a href="#risks">Risks</a>
                </b>
              </li>
              <li>
                <b>
                  <a href="#eligibility">Eligibility</a>
                </b>
              </li>
              <li>
                <b>
                  <a href="#medications">Medications</a>
                </b>
              </li>
              <li>
                <b>
                  <a href="#covid">Covid</a>
                </b>
              </li>
              <li>
                <b>
                  <Link to="/addUser">Add Donor</Link>
                </b>
              </li>
              <li>
                <b>
                  <Link to="/donorInfo">View Donors</Link>
                </b>
              </li>
              <li>
                <b>
                  <Link to="/login">Admin Login</Link>
                </b>
              </li>
            </ul>
          </div>
        </div>
        <section class="home" id="overview">
          <h1>Overview</h1>
          <p>
            Blood donation is a voluntary procedure that can help save the lives
            of others.{" "}
          </p>
          <p>
            There are several types of blood donation. Each type helps meet
            different medical needs.
          </p>
          <br></br>
          <h1>Whole blood donation</h1>
          <br></br>
          <p>
            This is the most common type of blood donation, during which you
            donate about a pint (about half a liter) of whole blood.
          </p>
          <p>
            The blood is then separated into its components red cells, plasma
            and sometimes platelets.
          </p>
        </section>
        <br></br>
        <section class="home" id="risks">
          <h1>Risks</h1>
          <br></br>
          <p>
            Blood donation is safe. New, sterile disposable equipment is used
            for each donor, so<br></br>
            there's no risk of contracting a bloodborne infection by donating
            blood.
          </p>
          <p>
            If you're a healthy adult, you can usually donate a pint (about half
            a liter) of blood without<br></br>
            endangering your health. Within a few days of a blood donation, your
            body replaces the<br></br>
            lost fluids. And after two weeks, your body replaces the lost red
            blood cells.
          </p>
        </section>
        <br></br>
        <section class="home" id="eligibility">
          <h1>Eligibility</h1>
          <br></br>
          <h3>
            To be eligible to donate whole blood, plasma or platelets, you must
            be
          </h3>
          <li>In good health</li>
          <li>
            At least 16 or 17 years old, depending on the law in your state.{" "}
            <br></br>
            Some states allow legal minors to donate with parent permission.{" "}
            <br></br>
            While there's no legal upper age limit, policies may vary between
            individual donor centers.
          </li>
          <li>At least 110 pounds (about 50 kilograms)</li>
          <li>Able to pass the physical and health-history assessments.</li>
        </section>
        <br></br>
        <section class="home" id="medications">
          <h1>Food and medications</h1>
          <br></br>
          <h3>Before your blood donation:</h3>
          <li>Get plenty of sleep the night before you plan to donate</li>
          <li>
            Eat a healthy meal before your donation. Avoid fatty foods, such as
            a hamburger, fries or ice cream.
          </li>
          <li>
            Check to see if any medications you are taking or recently took
            would prevent you <br></br>
            from donating. For example, if you are a platelet donor, you must
            not take aspirin for <br></br>
            two days prior to donating. Talk to your doctor before discontinuing
            any medications.
          </li>
          <li>Drink plenty of water before the donation.</li>
          <li>Wear a shirt with sleeves that can be rolled up..</li>
        </section>
        <br></br>
        <section class="home" id="covid">
          <h1>COVID-19 concerns</h1>
          <br></br>
          <p>
            The virus that causes coronavirus disease 2019 (COVID-19) hasn't
            been shown to be transmitted through blood transfusions.<br></br>
            However, the U.S. Food and Drug Administration suggests waiting to
            donate blood for at least 14 days after a <br></br>
            positive diagnostic test for COVID-19 without symptoms or for at
            least 14 days after symptoms of COVID-19 have <br></br>
            completely cleared up. Those who have tested positive for COVID-19
            antibodies but didn't have a diagnostic test and <br></br>
            never developed symptoms can donate without a waiting period or
            having a diagnostic test done before donation.
          </p>
        </section>
        <br></br>
        <section class="home" id="before">
          <h1>Before the procedure</h1>
          <br></br>
          <p>
            Before you can donate blood, you will be asked to fill out a
            confidential medical history that includes questions <br></br>
            about behaviors known to carry a higher risk of bloodborne
            infections — infections that are transmitted through the blood.
            <br></br>
            Because of the risk of bloodborne infections, not everyone can
            donate blood.{" "}
          </p>
          <h4>
            The following are a few high-risk groups that are not eligible to
            donate blood:
          </h4>
          <li>
            Anyone who has used injected drugs, steroids or another substance
            not prescribed by a doctor in the past three months
          </li>
          <li>
            Men who have had sexual contact with other men in the past three
            months
          </li>
          <li>Anyone who has a congenital coagulation factor deficiency</li>
          <li>Anyone who has had a positive test for HIV</li>
          <li>
            Anyone who has engaged in sex for money or drugs in the past three
            months
          </li>
          <li>
            Anyone who, in the past 12 months, has had close contact with —
            lived with or had sexual contact with —<br></br>a person who has
            viral hepatitis
          </li>
          <li>
            Anyone who spent three months or more in the United Kingdom from
            1980 through 1996
          </li>
          <li>
            Anyone who received a blood transfusion in the United Kingdom or
            France from 1980 to the present
          </li>
          <li>
            Anyone who has spent time that adds up to five years or more in
            France or Ireland from 1980 to 2001
          </li>
        </section>
        <br></br>
        <section class="home" id="after">
          <h1>After the procedure</h1>
          <br></br>
          <h4>
            After donating, you sit in an observation area, where you rest and
            eat a light snack. <br></br>
            After 15 minutes, you can leave. After your blood donation:
          </h4>
          <li>Drink extra fluids.</li>
          <li>
            If you feel lightheaded, lie down with your feet up until the
            feeling passes.
          </li>
          <li>Keep your bandage on and dry for the next five hours.</li>
          <li>
            AIf you have bleeding after removing the bandage, put pressure on
            the site and raise your arm until the bleeding stops
          </li>
          <li>
            If bruising occurs, apply a cold pack to the area periodically
            during the first 24 hours.
          </li>
          <li>
            Consider adding iron-rich foods to your diet to replace the iron
            lost with blood donation
          </li>
        </section>
        <br></br>
        <section class="home" id="result">
          <h1>Results</h1>
          <br></br>
          <p>
            TYour blood will be tested to determine your blood type and your Rh
            factor. Blood type is classified as A, B, AB or O. <br></br>
            The Rh factor refers to the presence or absence of a specific
            antigen — a substance capable of stimulating an immune response
            <br></br>— in the blood. You'll be classified as Rh positive or Rh
            negative, meaning you do or don't carry the antigen. <br></br>
            This information is important because your blood type and Rh factor
            must be compatible with the blood type and Rh factor <br></br>
            of the person receiving your blood.
          </p>
        </section>
        <br></br>
      </body>
    </html>
  );

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topBtn() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
};

export default Home;
