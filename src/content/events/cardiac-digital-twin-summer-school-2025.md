---
title: "Cardiac Digital Twin Summer School (CaDiTSS)"
date: 2025-10-06
endDate: 2025-10-10
dateDisplay: "6-10 October 2025"
location: "The Alan Turing Institute, London"
type: "event"
description: "A week-long intensive summer school focused on the development and application of digital twins in healthcare, covering topics from segmentation to model analysis."
excerpt: "Join leading experts for a comprehensive training program on cardiac digital twins, designed for MSc/PhD students and Early Career Researchers. Free to attend with limited places available."
links:
  - text: "Sign Up for Updates"
    url: "https://forms.office.com/e/sSR6HVPfy4"
draft: false
---

## About

The **Cardiac Digital Twin Summer School (CaDiTSS)** is a series of workshops focused on the development and application of digital twins in healthcare. The program covers a range of topics, including segmentation, cellular electrophysics, model analysis, and much more.

Open to MSc or PhD students and Early Career Researchers with an interest in cardiac digital twins, the course is designed to foster a growing community of digital twin experts across the UK.

CaDiTSS is delivered as part of [Networks of Cardiovascular Digital Twins](https://cvd-net.com) (CVD Net). Read more about CVDNet [here](../../pages/about/project-overview.astro)

**Attendance**: In-person only. Applications are now closed.

## Application Process (now closed)

Applications have closed on August 10th 2025.

Submissions will help us select a diverse group that will be able to make the most of the event and use their learning to advance their research in a range of topics and applications of cardiac digital twin technology. We are looking for candidates who have a real interest in cardiac digital twins and can demonstrate how the summer school can make a difference to their career journey, whether they are an MSc, PhD student, or early-career researcher (see below).

Applications will be reviewed by the CVDNet team and expectations about experience will be assessed within the applicant's training or career stage. The key criterion for selection is not level of experience but interest in cardiac digital twins and the anticipated benefits the summer school could bring to the participants' professional and research development.

## Programme

Bringing together international-level experts in their fields, the programme consists of a series of workshops mixing lectures and hands-on sessions covering a wide range of topics. More details are being confirmed in due course.

To be the first to receive updates on the programme and other details, [sign up to our mailing list here](https://forms.office.com/e/sSR6HVPfy4). If you have questions about the activity, check our FAQ below and if you cannot find an answer, write to our inbox [caditss@turing.ac.uk](mailto:caditss@turing.ac.uk). The Summer School is free to attend, but places are limited and will be offered based on a simplified application process.

Participants must bring their own laptops to all sessions to be able to participate in the practical sessions. More information about other potential requirements, such as the installation of software that may need to be done in advance will be shared with confirmed participants ahead of the event.

|                 | Monday 06/10                                                                                   | Tuesday 07/10                                                                                                                    | Wednesday 08/10                                                                                                                | Thursday 09/10                                                                              | Friday 10/10                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| AM 9 \- 12:30   | **Segmentation & Model Fitting** [Alistair Young](https://www.kcl.ac.uk/people/alistair-young) | **Motion** [Abdul Qayyum](https://www.linkedin.com/in/abdul-qayyum-phd-a5876ab1/)                                                | **Cardiac Contraction Models** [Steven Niederer](https://www.imperial.ac.uk/news/245775/professor-steven-niederer-joins-nhli/) | **Electrophysiology Simulator** [Martin Bishop](https://www.kcl.ac.uk/people/martin-bishop), [Fernando Campos](https://www.kcl.ac.uk/people/dr-fernando-campos) | **Model Analysis** [Caroline Roney](https://www.cpm.qmul.ac.uk/people/croney)                 |
| PM 1:30 \- 5:00 | **Shape** [Pablo Lamata](https://www.kcl.ac.uk/people/pablo-lamata-de-la-orden)                | **Gaussian Process Emulators** [Richard Wilkinson](https://www.nottingham.ac.uk/science/research/take-10/richard-wilkinson.aspx) | **Cellular Electrophysiology** [Gary Mirams](https://www.maths.nottingham.ac.uk/plp/pmzgm/)                                    | **Mechanics Model** [Team CEMRG](https://www.cemrg.com/)                                    | **Clinical Application** [Steven Williams](https://www.kcl.ac.uk/people/steve-williams-ioppn) |

### Segmentation and Model Fitting

[**Alistair Young, Professor of Cardiovascular Data Analytics and Artificial Intelligence**](https://www.kcl.ac.uk/people/alistair-young)**, King’s College London**

This session will provide hands-on experience with a pipeline for constructing cardiac biventricular surface meshes from cardiovascular magnetic resonance (CMR) DICOM images. The code used will be available for public download, alongside a test dataset, before the session. Participants will be guided through the following steps:

- Sorting of the DICOM images into cine slices in short and long axis views.
- Segmentation of the cine slices
- Fitting a 3D+t model of the left and right ventricles including four valve annuli

Participants are expected to bring their own laptop to run the pipeline. We will run the test case, but you can also bring your own anonymised DICOM datasets for testing.

### Shape

[**Pablo Lamata, Professor and Director of the Centre for Doctoral Training in Digital Twins for Healthcare**](https://www.kcl.ac.uk/people/pablo-lamata-de-la-orden)**, King’s College London**

This session will teach you how to analyse cardiac morphology, how to build statistical shape models, and use principal component analysis (PCA) to learn an unsupervised compact representation from data. PCA offers the ability to describe each anatomy by a set of coefficients, potential biomarkers to then study their link with any other relevant aspect of your research, such as function or clinical outcomes.

### Motion

[**Abdul Qayyum**](https://www.linkedin.com/in/abdul-qayyum-phd-a5876ab1/)**, National Heart and Lung Institute, Imperial College London**

This session provides a comprehensive introduction to key image analysis techniques in cardiac imaging, focusing on segmentation, registration, and motion tracking. Participants will learn how to process and analyse cardiac MRI and CT data to extract clinically relevant information.

Through hands-on coding exercises and real-world datasets, attendees will explore methods to segment cardiac structures, register temporal image sequences, and track heart motion across the cardiac sequences. This session is ideal for those interested in applying image analysis to cardiovascular research or clinical applications.

### Gaussian Process Emulators (GPE)

[**Richard Wilkinson, Professor of Statistics**](https://www.nottingham.ac.uk/science/research/take-10/richard-wilkinson.aspx)**, University of Nottingham**

Complex computer models are often too computationally intensive for us to use them in downstream statistical analyses (e.g. in sensitivity analysis or parameter estimation). Instead, we can build a cheap statistical approximation to the model called an “emulator” or “surrogate model”. In this session, we will focus on Gaussian Process (GP) emulators. We will cover some of the basic theory behind GPs and how to use GPyTorch’s Python implementation of Gaussian processes to build emulators of cardiac models. The session will be a mix of lecture and hands-on workshop where participants will build their own emulators.

### Understanding the Heart's Engine: Cardiac Contraction Models & Hands-on Implementation

[**Steven Niederer, Professor and Chair in Biomedical Engineering**](https://www.imperial.ac.uk/news/245775/professor-steven-niederer-joins-nhli/)**, Imperial College London and The Alan Turing Institute**

In this session we will review cardiac mechanics and the evolution of mathematical models that simulate the heart's contractile function. This session will explain the iterative development of these models, from foundational concepts in muscle physiology to patient-specific simulations. We will explore the physiology of cardiac muscle contraction, including the roles of key proteins, calcium signalling, and the mechanisms that regulate force generation at the sarcomere level.

The session includes a practical workshop where participants will have the opportunity to implement computational models of cardiac contraction. You'll gain experience in implementing your own cardiac contraction models, providing insight into how these tools are constructed and utilized in research. This lecture and tutorial will cover cardiovascular physiology, biomedical engineering, and computational modelling.

### Cellular Electrophysiology

[**Gary Mirams, Professor of Mathematical Physiology**](https://www.maths.nottingham.ac.uk/plp/pmzgm/)**, University of Nottingham**

This session will cover the basics of ion channel modelling and cellular electrophysiology modelling. We will be looking at how differential equation models for ion channels and cellular voltage and concentrations are derived, and how their parameter values can be fitted to data from real experiments.

### Electrophysiology (EP) Simulator

[**Martin Bishop, Reader in Computational Cardiac Electrophysiology**](https://www.kcl.ac.uk/people/martin-bishop)**, King’s College London**

This session will summarise the entirety of cardiac electrophysiology, including the underlying physiology and biophysics to its representation by physics-based equations and their simulation of clinically-relevant phenomena. We will introduce and discuss everything from single- (and sub-) cellular electrophysiology, through to the formation of the clinical ECG. In the practical session, we will simulate propagation of an electrical stimulus down a 1D cardiac fibre (the monodomain equation). We will use this setup to perform in-silico experiments that help understand the effects of restitution of single cell ionic properties (action potential duration) as well as tissue level properties (conduction velocity).

[**Fernando Campos, Research Associate**](https://www.kcl.ac.uk/people/dr-fernando-campos)**, King's College London**

Dr Fernando Campos is a Research Associate at the School of Biomedical Engineering and Imaging Sciences. He conducts research on the field of computational cardiology using the Digital Twin technology to understand arrhythmia mechanisms in heart diseases and improve clinical practice.

### Mechanics Model

[**Cardiac Electro-Mechanics Research group (CEMRG)**](https://www.cemrg.com/)**, Imperial College London and King’s College London**

Led by a team from the Cardiac Electro-Mechanics Research group (CEMRG), this session will explore the modelling of cardiac mechanics, combining theoretical concepts with practical examples. We will introduce different boundary conditions, including displacement, pressure, and spring-based approaches, and apply these in guided exercises. The session will end with a four-chamber free contraction model, demonstrating how the methods scale from simple example geometries to whole-heart simulations. Participants will also gain experience using ParaView to visualise and analyse biomechanics simulation results.

### Model Analysis

[**Caroline Roney, Reader in Computational Medicine**](https://www.sems.qmul.ac.uk/staff/c.roney/)**, Queen Mary University of London**

This session will focus on generating atrial models from imaging or electrical data. We will demonstrate how to produce atrial meshes for electrophysiological simulations, incorporating atrial regions, fibres, and transmural variations across the atrial wall, using atrialmtk. We will then show how to run simulations in these meshes for different atrial rhythms. Finally, we will show some example post-processing approaches for how to analyse atrial electrophysiology simulation data. The session will be mostly practical.

### Clinical Application

[**Steven Williams, Professor of Neuroimaging**](https://www.kcl.ac.uk/people/steve-williams-ioppn)**, King’s College London**

_More information to be confirmed soon_

## FAQ

- **Can anyone attend the programme?** The programme is designed for MSc, PhD students and early career researchers with an interest in cardiac digital twins. Sessions do not presume that participants will have experience in the particular topics covered. If you have questions about whether they will be suitable for your experience, write to our inbox [caditss@turing.ac.uk](mailto:caditss@turing.ac.uk)
- **Is there a fee to attend?** No. The Cardiac Digital Twin Summer School is free to attend but places are limited and will be offered via a simplified application process.
- **Can I attend online?** Unfortunately, due to the nature of the sessions, attendance is only possible in-person.
- **Can I attend only a few selected sessions?** CaDiTSS is designed for participants to attend it in full, and it is expected that participants will participate in all sessions. The objective is to provide training that enables participants to engage in cardiac digital twins research effectively. By attending all sessions, participants will gain insight into multiple and crucial issues for the advancement of this field.
- **Is catering provided?** Yes, lunch will be provided alongside tea and coffee during the sessions. Upon registration you will be asked about any dietary requirements you may have.
- **Is there any accessibility support available?** We can consider requests for reasonable adjustments. Attendees will be asked about their accessibility requirements following their place offer.
- **What is our definition of an Early Career Researcher?** Early career researchers are usually defined by a number of years from their PhD submission (e.g. 7 years following submission of a PhD thesis). We are not establishing a rigid criteria based on career stage for attendance. This information is only to provide general guidance about the attendee’s level of experience the summer school is likely to be relevant for. Anyone, independently of their career stage can apply to attend, but be mindful that it may not be suitable for senior positions like Senior Lecturers or Professors.
