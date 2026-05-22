const HomePage = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <div className="home-section">

      
        <h2>Our story</h2>

        <p>
          We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan
          page. Fans were given situations where they had to come up with wacky and fun excuses.
          The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers.
          Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan
          Pizza. Ever!
        </p>

        <p>
          Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist
          the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan Pizza. They have been
          leaving the stage in the middle of a performance and even finding excuses to be
          disqualified in a football match.
        </p>

        <p>
          We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given
          situations where they had to come up with wacky and fun excuses. The person with the best
          excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response
          proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!
        </p>

        
        <div className="row align-items-center my-4">
          <div className="col-md-5">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format"
              alt="Fresh Ingredients"
              className="home-story-img"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/280x220?text=Ingredients";
              }}
            />
          </div>

          <div className="col-md-7">
            <h4 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>
              Ingredients
            </h4>
            <p>
              We're ruthless about goodness. We have no qualms about tearing up a day-old lettuce
              leaf (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop. Chop.
              Steam. Steam. Stir. Stir. While they're still young and fresh - that's our motto. It
              makes the kitchen a better place.
            </p>
          </div>
        </div>

       
        <div className="row align-items-center my-4">
          <div className="col-md-6">
            <h4 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>
              Our Chefs
            </h4>
            <p>
              They make sauces sing and salads dance. They create magic with skill, knowledge,
              passion, and stirring spoons (among other things). They make goodness so good, it
              doesn't know what to do with itself. We do though. We send it to you.
            </p>
          </div>

          <div className="col-md-6 text-end">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&auto=format"
              alt="Our Chefs"
              className="home-chef-img"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/340x230?text=Chef";
              }}
            />
          </div>
        </div>

        
        <div className="row align-items-center my-4">
          <div className="col-md-5">
            <img
              src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=500&auto=format"
              alt="45 min delivery"
              className="home-delivery-img"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/280x220?text=Delivery";
              }}
            />
          </div>

          <div className="col-md-7">
            <h4 style={{ fontSize: "1.6rem" }}>45 min delivery</h4>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;