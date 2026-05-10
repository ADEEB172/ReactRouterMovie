import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    // console.log(res);
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error.message);
  }
};
export const Contact = () => {
  return (
    <section className="section-contact">
      <div className="container">
        <h2 className="section-common--heading">Contact Us</h2>

        <p className="section-common--subheading">
          Get In touch with us. We are always here to help you.
        </p>

        <div className="contact-content">
          <Form method="POST" action="/contact">
            {/* First Row */}
            <div className="grid grid-two--cols mb-3">
              <div>
                <label htmlFor="username">Full Name</label>

                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  placeholder="Enter Full Name"
                />
              </div>

              <div>
                <label htmlFor="email">Email Address</label>

                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="Enter Email"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-3">
              <label htmlFor="message">Message</label>

              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="We are always here to help you"
              ></textarea>
            </div>

            {/* Button */}
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
};