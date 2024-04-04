// Civil.jsx
import React from 'react';

function Civil({ plaintiffid, plaintiffstatus, plaintiffrepresentative, defendantid, defendantstatus, defendantrepresentative, facts, plaintiffallegations, defendantcounterclaims, reasons, finaldeclarations
}) {
  return (
    <div>
      <h2>Civil Judgment</h2>
      <h3>Identity of the parties:</h3>
      <p>In the matter of Case ת"א 4320-04-24, the plaintiff, {plaintiffid}, a {plaintiffstatus}, represented by their esteemed legal counsel, {plaintiffrepresentative}, initiated legal proceedings against the defendant, {defendantid}, a {defendantstatus}, represented by their distinguished legal counsel, {defendantrepresentative}. The parties have been properly identified and are present before this honorable court.</p>

      <h3>Facts of the dispute:</h3>
      <p>The genesis of this dispute lies in the events as narrated by both parties. The plaintiff alleges that {plaintiffallegations}, which, if proven, would establish liability on the part of the defendant. Conversely, the defendant rebuts these claims, asserting that {defendantcounterclaims}. The court has meticulously reviewed the evidence presented, including witness testimonies, documentary exhibits, and expert opinions, to ascertain the veracity of each party's contentions.</p>

      <h3>Reasons for decision:</h3>
      <p>In rendering its decision, the court has meticulously scrutinized the evidence and legal arguments put forth by both parties. It is incumbent upon this tribunal to weigh the merits of the case in light of applicable law and jurisprudence. After due deliberation, the court finds that {reasons}, rooted firmly in the prevailing legal principles and supported by relevant precedents. The court's decision is guided by the pursuit of justice and fairness, ensuring equitable resolution for all parties involved.</p>

      <h3>Device:</h3>
      <p>This judgment is transmitted via electronic means, utilizing the secure Electronic Court Filing System (ECFS). The utilization of electronic channels for the dissemination of judicial decisions exemplifies the court's commitment to modernizing its processes while ensuring expeditious delivery of justice. By leveraging technology, the court endeavors to enhance accessibility and efficiency, thereby facilitating seamless interactions within the legal framework.</p>

      <h3>Final declarations:</h3>
      <p>In light of the evidence presented and the applicable legal standards, the court hereby adjudicates {finaldeclarations}. This disposition is deemed just and equitable, affording due consideration to the rights and obligations of each party.</p>

      <h3>Signatures and court stamp:</h3>
      <pre>
        ______<br />
        / ___ \ <br />
        | |   | |  Court of <br />
        | |___| |  Tel Aviv <br />
        \_____/ <br />
      </pre>
      <p>Judge Sarah Cohen</p>
      <p>Chief Justice David Levy</p>
      <p>Court of Tel Aviv</p>
    </div>
  );
}

export default Civil;
