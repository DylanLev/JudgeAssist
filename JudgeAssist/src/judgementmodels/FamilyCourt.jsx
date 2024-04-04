import React from 'react';

const FamilyCourt = ({ plaintiffid, plaintiffrepresentative, defendantid, defendantrepresentative, plaintiffallegations, defendantcounterclaims, reasons, finaldeclarations }) => {
  return (
    <div>
      <h2>Family Court Judgment</h2>
      
      <h3>Identity of the parties:</h3>
      <p>
        In the matter of Case ת"א 4320-04-24, the petitioner, {plaintiffid}, represented by their dedicated legal counsel, {plaintiffrepresentative}, initiated legal proceedings against the respondent, {defendantid}, represented by their compassionate legal counsel, {defendantrepresentative}. The parties have been properly identified and are present before this honorable court.
      </p>

      <h3>Facts of the case:</h3>
      <p>
        The circumstances leading to this family court proceeding are multifaceted and deeply personal. The petitioner asserts that {plaintiffallegations}, while the respondent presents {defendantcounterclaims}. The court has meticulously examined the evidence, including testimonies from both parties, expert opinions, and relevant documents, to discern the truth amidst conflicting narratives.
      </p>

      <h3>Reasons for the ruling:</h3>
      <p>
        In rendering its ruling, the court has conducted a thorough review of the evidence and legal arguments presented by both parties. It is incumbent upon this tribunal to consider the welfare of any children involved and to uphold the principles of equity and fairness. After careful deliberation, the court finds that {reasons}, rooted firmly in legal precedent and the best interests of the family members affected. The court's ruling aims to promote stability and harmony within the family unit while addressing the issues at hand.
      </p>

      <h3>Device:</h3>
      <p>
        This ruling is transmitted electronically through the secure Electronic Court Filing System (ECFS). The utilization of electronic platforms for disseminating judicial decisions underscores the court's commitment to modernize its processes while ensuring prompt delivery of justice. By embracing technology, the court aims to improve accessibility and efficiency, thereby fostering a seamless legal framework, particularly in sensitive family matters.
      </p>

      <h3>Final declarations:</h3>
      <p>
        In light of the evidence presented and the applicable legal standards, the court hereby issues its ruling. The court orders {finaldeclarations}. This ruling is deemed fair and equitable, considering the unique circumstances of the family involved.
      </p>

      <h3>Signatures and court stamp:</h3>
      <p>
        Upon the pronouncement of this ruling, the undersigned presiding judge affixes their signature, signifying the official endorsement of this decision. This judgment is issued under the authority vested in this court and bears the official seal of Court of Tel Aviv, symbolizing the solemnity and legitimacy of its contents.
      </p>
      <p>
        Judge Sarah Cohen <br />
        Chief Justice David Levy <br />
        Court of Tel Aviv
      </p>
      <pre>
        _______ <br />
       / ___ \ <br />
      | |   | | Court of <br />
      | |___| | Tel Aviv <br />
       \_____/
      </pre>
    </div>
  );
};

export default FamilyCourt;
