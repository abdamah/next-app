import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

const WelcomeToEmalTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome to board!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://google.com">Go to riigsoft.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeToEmalTemplate;
