import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Themenbasierte Kanäle',
    Svg: require('@site/static/img/themenbasiert.svg').default,
    description: (
      <>
        Discord Server werden in themenbasierte Kanäle eingeteilt. Der Vorteil dabei ist, dass man so mit anderen arbeiten, Inhalte oder lustige Memes teilen kann, ohne einen Gruppenchat mit Spam zu überfüllen
      </>
    ),
  },
  {
    title: 'Treffen einfach gemacht',
    Svg: require('@site/static/img/easyMeetings.svg').default,
    description: (
      <>
        Sprachkanäle sind sehr übersichtlich und auch in verschiedenen Kategorien geteilt, sodass Freunde auf dem Server einfach dazukommen können, ohne extra anrufen zu müssen.
      </>
    ),
  },
  {
    title: 'Von klein bis ganz groß',
    Svg: require('@site/static/img/kleinbisgross.svg').default,
    description: (
      <>
        Unabhängig von der Servergröße könnnen Admins benutzerdefinierte Zugänge erstellen, Rollen vergeben oder auch private bzw. öffentliche Kanäle definieren. Die Community kann demnach sehr klein oder auch bis zu tausende Nutzer haben.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
