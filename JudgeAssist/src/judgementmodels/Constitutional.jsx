import React from 'react';

const Constitutional = ({ plaintiffid, plaintiffstatus, plaintiffrepresentative, defendantid, defendantstatus, defendantrepresentative, plaintiffallegations, defendantcounterclaims, reasons, finaldeclarations
}) => {
  return (
    <div>
      <h2>Constitutional Judgment</h2>
      
      <h3>Identity of the parties:</h3>
      <p>
        In the matter of Case ת"א 4320-04-24, the plaintiff, {plaintiffid}, a {plaintiffstatus}, represented by their esteemed legal counsel, {plaintiffrepresentative}, brings forth before this honorable court a matter of constitutional significance. Defendant {defendantid}, also a {defendantstatus}, is duly represented by their distinguished legal counsel, {defendantrepresentative}, in this consequential proceeding.
      </p>

      <h3>Facts of the dispute:</h3>
      <p>
        The crux of the matter lies in the divergent interpretations of constitutional provisions as asserted by both parties. The plaintiff contends that {plaintiffallegations}, emphasizing the paramount importance of safeguarding fundamental rights and preserving constitutional integrity. Conversely, the defendant submits that {defendantcounterclaims}, positing alternative interpretations consistent with established legal principles.
      </p>

      <h3>Reasons for decision:</h3>
      <p>
        In adjudicating this constitutional dispute, this court undertakes a solemn duty to uphold the supremacy of the constitution and safeguard the fundamental principles enshrined therein. Through meticulous examination of legal precedents, scholarly discourse, and the constitutional text itself, the court arrives at a judicious determination. The court finds that {reasons}, grounded firmly in constitutional jurisprudence and reflective of the enduring values of justice and equality. This decision serves as a bulwark against encroachments on constitutional rights and ensures the preservation of our democratic ideals.
      </p>

      <h3>Device:</h3>
      <p>
        This judgment is disseminated electronically through the secure Electronic Court Filing System (ECFS), underscoring the judiciary's commitment to leveraging technology in the service of justice. By harnessing the power of digital platforms, the court endeavors to enhance transparency, accessibility, and efficiency in the administration of constitutional justice. This reaffirms the judiciary's adaptability to contemporary challenges while reaffirming its enduring dedication to the rule of law.
      </p>

      <h3>Final declarations:</h3>
      <p>
        In light of the profound constitutional issues at stake and mindful of the legal arguments advanced by both parties, this court renders its decision with due solemnity and circumspection. Accordingly, the court hereby {finaldeclarations}, recognizing the far-reaching implications of its pronouncement on the constitutional landscape. This judgment stands as a testament to the enduring vitality of our constitutional democracy and the judiciary's indispensable role in safeguarding its sanctity.
      </p>

      <h3>Signatures and court stamp:</h3>
      <p>
        In witness whereof, the undersigned justices affix their signatures, signifying the official endorsement of this constitutional judgment. This judgment is issued under the authority vested in the Court of Tel Aviv and bears its official seal, emblematic of the enduring commitment to justice and the rule of law.
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

export default Constitutional;
