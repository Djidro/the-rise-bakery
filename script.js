/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fff;
  color: #333;
}

h1, h2, h3 {
  font-weight: bold;
  font-style: italic;
}

/* Header */
header {
  background-color: black;
  color: white;
  text-align: center;
  padding: 40px 20px;
  position: relative;
}

.header-logo {
  width: 80px;
  position: absolute;
  top: 10px;
  left: 10px;
}

.hero-title {
  font-size: 3rem;
}

.navigation ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.navigation ul li {
  margin: 0 20px;
}

.navigation ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

.navigation ul li a:hover {
  color: #f8b400;
}

/* Product Gallery */
.product-gallery {
  padding: 40px 20px;
  background-color: #fafafa;
  text-align: center;
}

.product-gallery h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.cake-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.cake-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.cake-item p {
  margin-top: 10px;
}

.order-btn {
  background-color: #f8b400;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
}

.order-btn:hover {
  background-color: #f88b00;
}

/* Service Section */
.services {
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.services h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.service-item {
  display: inline-block;
  margin: 20px;
  width: 300px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.service-item h3 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 15px 0;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
}

.service-item p {
  padding: 10px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
}

/* About Us */
.about-us {
  padding: 40px 20px;
  background-color: #fafafa;
  text-align: center;
}

.about-us p {
  font-size: 1.2rem;
  margin-top: 20px;
}

.about-image {
  width: 150px;
  margin-top: 20px;
}

/* Why Choose Us */
.why-choose-us {
  padding: 40px 20px;
  text-align: center;
  background-color: #f8f8f8;
}

.why-choose-us p {
  font-size: 1.2rem;
  margin-top: 20px;
}

.why-choose-image {
  width: 150px;
  margin-top: 20px;
}

/* Contact Us */
.contact-us {
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.contact-us p {
  font-size: 1rem;
  margin: 10px 0;
}

/* Footer */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}

footer p {
  margin: 0;
}
