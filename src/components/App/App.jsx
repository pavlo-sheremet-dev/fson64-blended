import cardInfo from 'data/article.json';
import data from 'data/data.json';

import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          name={cardInfo.name}
          postedAt={cardInfo.postedAt}
          description={cardInfo.description}
          tag={cardInfo.tag}
          title={cardInfo.title}
          avatar={cardInfo.avatar}
          poster={cardInfo.poster}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title={'Main Statistics'} stats={data} />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory />
      </Container>
    </Section>
  );
};
