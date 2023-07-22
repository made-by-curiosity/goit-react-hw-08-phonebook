import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { SectionWrapper } from 'components/Section/Section.styled';

const Contacts = () => {
  return (
    <Container titleText="Phonebook">
      <SectionWrapper>
        <Section>
          <Form />
        </Section>
        <Section sectionTitle="Contacts">
          <Filter filterTitle="Find contacts by name" />
          <ContactList />
        </Section>
      </SectionWrapper>
    </Container>
  );
};

export default Contacts;
