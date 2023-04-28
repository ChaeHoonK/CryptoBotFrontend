import { ReactComponentElement } from "react";
import styles from "./Profile.module.css";

function linked(component: ReactComponentElement<any>, link: string) {
  return (
    <a href={link} target="_blank">
      {component}
    </a>
  );
}

export default function Profile({
  ImgSrc,
  MemberName,
  Role,
  link,
}: {
  ImgSrc: string;
  MemberName: string;
  Role: string;
  link?: string;
}) {
  const profile = (
    <div className={styles.main}>
      <img src={ImgSrc} />
      <h4>
        <strong>{MemberName}</strong>
      </h4>
      <h5>{Role}</h5>
    </div>
  );

  if (link) {
    return linked(profile, link);
  }

  return profile;
}
