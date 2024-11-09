import Image from "next/image";

const Icon_Grid = ({ initialValues }) => {
  return (
    <section className="">
      {initialValues &&
        initialValues.map((data, index) => {
          return (
            <div className="container" key={index}>
              <div className="text-center mb-8 md:mb-14">
                <h2>{data.title}</h2>
                <div className="max-w-[990px] mx-auto space-y-4">
  

                <p>
    At <strong>Bioscope Journeys India</strong>, we are passionate about bringing you closer to the heart of India. 
    Our name comes from the idea of a &quot;Bioscope,&quot; a lens through which you can view the diverse and 
    colorful life of this incredible land. With every trip we design, we aim to offer more than just a 
    vacation. We craft experiences that allow you to explore the rich tapestry of India — from its vibrant 
    cities to its hidden gems, from its ancient history to its lush natural beauty.
  </p>

  <p>
    Whether you&apos;re trekking through the Himalayas, wandering through the misty tea gardens of Darjeeling, 
    exploring the backwaters of Kerala, or diving into the cultural and spiritual heart of Varanasi, 
    <strong>Bioscope Journeys</strong> offers you a front-row seat to the magic of India. Our curated journeys are carefully 
    designed to suit a wide range of interests — nature lovers, history buffs, adventure seekers, and cultural 
    enthusiasts.
  </p>

  <p>
    We work with local experts, guides, and artisans to ensure that each experience you have is authentic and 
    deeply connected to the people and places you visit. Our goal is to foster a deeper understanding of India’s 
    rich cultural diversity, traditions, and natural wonders, while also promoting sustainable and responsible travel.
  </p>

  <p>
    At <strong>Bioscope Journeys India</strong>, we believe that travel is not just about seeing the world but experiencing it in a 
    way that transforms and connects. Let us be your guide to discovering the magic, the mystery, and the soul of India.
  </p>
  <br/><br/>
  
  <p className="font-bold text-center text-3xl ">Why Choose Us?</p>
  <br/>

  <div className="space-y-4">
    <p><strong>Personalized Tailored Service</strong><br/> We take the time to understand your travel style and preferences, offering customized itineraries that reflect your interests and desires. Whether you’re looking for a romantic getaway, a family vacation, or a solo adventure, we create personalized itineraries to suit your needs.</p>
    <br/>
    <p><strong>End-to-End Support</strong><br/> We ensure that every aspect of your journey is taken care of with the utmost attention to detail, so you can focus on enjoying the adventure and discovering the soul of India. Our team is available 24/7 to assist you with anything you may need, from booking changes to emergency support.</p>
    <br/>
    <p><strong>Expert Insights</strong><br/> Our team consists of experienced consultants who know the destinations we offer inside and out. We share our knowledge to help you make the most of every moment.</p>
    <br/>
    <p><strong>Exceptional Guides</strong><br/> Our highly regarded tour escorts and local guides, whose expertise and passion have earned us an outstanding reputation in the industry, will ensure that your holiday with us is nothing short of extraordinary.</p>
    <br/>
    <p><strong>Immersive and Experiential Vacations</strong><br/> Centered on leisurely travel, activities, and experiences. Embark on a journey off the beaten path to uncover captivating destinations that lie beyond the typical tourist routes. While our suggested tours may take you beyond the comforts of home, they will reward you with truly unforgettable experiences.</p>
    <br/>
    <p><strong>Sustainable Travel</strong><br/> We are committed to responsible travel that benefits both the traveler and the communities they visit. Sustainability is at the heart of everything we do.</p>
  </div>

  <br/><br/>
  
  <p className="font-bold text-center text-3xl ">Join us on your next adventure</p>
  <br/>
  <p>At Bioscope Journeys India, we believe that the world is full of hidden gems waiting to be discovered. Let us take you there. Whether you&apos;re traveling for relaxation, exploration, or to challenge yourself, we&apos;ll help you create memories that last a lifetime.
  </p>
  <br/><br/>

  <p className="font-bold text-center text-3xl ">About the Name and Logo</p>
  <br/>
  <p>The word &quot;<strong>Bioscope</strong>&quot; has historically been linked to early motion picture equipment, and in some regions, it is still used to refer to a movie theater or film projector. In this context, it evokes the idea of experiencing life as an unfolding story—where each journey represents a new chapter, filled with discovery and adventure.</p>

  <p>By using the word &quot;<strong>Bioscope</strong>&quot;, we aim to conjure images of personalized, meticulously crafted travel experiences, much like how a bioscope (or film projector) brings a unique story or world to life for its audience. The core belief is that every trip is thoughtfully designed and tailored to each traveller, offering a distinct &quot;view&quot; or &quot;perspective&quot; on the places, customs, and experiences, making them feel like the hero of their own journey by reflecting their individual preferences, interests, and desires.</p>

  <p>In essence, <strong>Bioscope Journeys India</strong> strives to create a travel experience as unique, personal, and meaningful as a carefully shot and edited film.</p>


</div>

              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Icon_Grid;
