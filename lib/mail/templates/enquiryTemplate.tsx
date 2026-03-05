import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Hr,
  Img,
} from "@react-email/components";

export type ContactEmailProps = {
  name: string;
  email: string;
  phone: string;
  enquireAbout: string;
  message: string;
};

export function ContactEmail({
  name,
  email,
  phone,
  enquireAbout,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact enquiry from {name}</Preview>

      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f4f7",
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "10px",
            maxWidth: "600px",
            margin: "30px auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {/* Header */}
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "40px",
              color: "#111111",
              textAlign: "center",
            }}
          >
            New Website Contact Enquiry
          </Text>

          {/* Body Content */}
          <Text
            style={{ fontSize: "16px", marginBottom: "10px", color: "#111111" }}
          >
            <strong>Name:</strong> {name}
          </Text>

          <Text
            style={{ fontSize: "16px", marginBottom: "10px", color: "#111111" }}
          >
            <strong>Email:</strong> {email}
          </Text>

          <Text
            style={{ fontSize: "16px", marginBottom: "10px", color: "#111111" }}
          >
            <strong>Phone:</strong> {phone}
          </Text>

          <Text
            style={{ fontSize: "16px", marginBottom: "10px", color: "#111111" }}
          >
            <strong>Enquiry About:</strong> {enquireAbout}
          </Text>

          <Text
            style={{ fontSize: "16px", marginBottom: "20px", color: "#111111" }}
          >
            <strong>Message:</strong> {message}
          </Text>

          <Hr style={{ borderColor: "#e0e0e0", margin: "20px 0" }} />

          {/* Footer */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            {/* Logo */}
            <Img
              // replace this with your real logo later
              src="https://eetweb.vercel.app/assets/images/logo.svg"
              alt="eet logo"
              width="170"
              height="60"
              style={{ display: "block", margin: "0 auto 15px" }}
            />

            {/* Copyright */}
            <Text
              style={{ fontSize: "12px", color: "#999999", marginTop: "15px" }}
            >
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </Text>
          </div>
        </Container>
      </Body>
    </Html>
  );
}
