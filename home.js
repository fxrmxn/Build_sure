#include "stdafx.h"
#include<stdlib.h>
#include<glut.h>

float eye[3]={-5.0,1.8,-1.2};

void display()
{
	
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glLoadIdentity();
	gluLookAt(eye[0],eye[1],eye[2],0.0,0.0,0.0,0.0,1.0,0.0);



	//floor
	glPushMatrix();
	glColor3f(0.0,0.0,1.0);
	glTranslatef(0.0,0.01,0.0);
	glScalef(1.0,0.02,1.0);
	glutSolidCube(4.0);
	glPopMatrix();


	//rightwall
	glPushMatrix();
	glColor3f(1.0,0.0,0.0);
	glTranslatef(2.04,0.265,0.0);
	glScalef(0.02,0.15,1.0);
	glutSolidCube(4.0);
	glPopMatrix();


	//frontwall
	glPushMatrix();
	glColor3f(1.0,0.0,0.0);
	glTranslatef(0.0,0.265,-2.04);
	glScalef(1.0,0.15,0.02);
	glutSolidCube(4.0);
	glPopMatrix();

	//backk wall
	glPushMatrix();
	glColor3f(0.11, 0.49, 0.24);
	glTranslatef(0.0,0.965,2.04);
	glScalef(1.0,0.50,0.02);
	glutSolidCube(4.0);
	glPopMatrix();


	//small wall
	glPushMatrix();
	glColor3f(1.0,0.0,0.0);
	glTranslatef(-2.04,0.265,0.80);
	glScalef(0.02,0.15,0.6);
	glutSolidCube(4.0);
	glPopMatrix();

	//saja 1
	glPushMatrix();
	glColor3f(255,255,255);
	glTranslatef(0.0,2.0,2.04);
	glScalef(1.0,0.0225,0.0225);
	glutSolidCube(4.0);
	glPopMatrix();

	//saja 2
	glPushMatrix();
	glColor3f(255,255,255);
	glTranslatef(2.04,2.0,0.0);
	glScalef(0.0225,0.0225,1.0);
	glutSolidCube(4.0);
	glPopMatrix();


	//frontwall
	glPushMatrix();
	glColor3f(255,255,255);
	glTranslatef(0.0,2.0,-2.04);
	glScalef(1.0,0.0225,0.0225);
	glutSolidCube(4.0);
	glPopMatrix();

	//small wall
	glPushMatrix();
	glColor3f(255,255,255);
	glTranslatef(-2.04,2.0,0.0);
	glScalef(0.0225,0.0225,1.0);
	glutSolidCube(4.0);
	glPopMatrix();


	//pillar1
	glPushMatrix();
	glColor3f(255,255,255);
	glTranslatef(2.04,1.002,2.04);
	glScalef(0.045,1.0395,0.045);
	glutSolidCube(2.0);
	glPopMatrix();

	//pillar2
	glPushMatrix();
	glColor3f(255,255,255);
	glTranslatef(2.04,1.002,0.0);
	glScalef(0.045,1.0395,0.045);
	glutSolidCube(2.0);
	glPopMatrix();


	//pillar3
	glPushMatrix();
	glColor3f(255,255,255);
	glTranslatef(2.04,1.002,-2.04);
	glScalef(0.045,1.0395,0.045);
	glutSolidCube(2.0);
	glPopMatrix();


	//pillar4
	glPushMatrix();
	glColor3f(255,255,255);
	glTranslatef(0,1.002,-2.04);
	glScalef(0.045,1.0395,0.045);
	glutSolidCube(2.0);
	glPopMatrix();


	//pillar5
	glPushMatrix();
	glColor3f(255,255,255);
	glTranslatef(-2.04,1.002,-2.04);
	glScalef(0.045,1.0395,0.045);
	glutSolidCube(2.0);
	glPopMatrix();


	//pillar6
	glPushMatrix();
	glColor3f(255,255,255);
	glTranslatef(-2.04,1.002,0.0);
	glScalef(0.045,1.0395,0.045);
	glutSolidCube(2.0);
	glPopMatrix();


	//pillar7
	glPushMatrix();
	glColor3f(255,255,255);
	glTranslatef(-2.04,1.002,2.04);
	glScalef(0.045,1.0395,0.045);
	glutSolidCube(2.0);
	glPopMatrix();

	
	//Roof
	//Pyramid
    glPushMatrix();
    glTranslatef(0, 1.79,0);
    glScalef(5, 1.75, 5);

    // Base (Square)
    glBegin(GL_QUADS);
    // Side 1 
	glColor3f(0.0,0.0,1.0);
    glVertex3f(-0.5, 0.0, -0.5);
    glVertex3f(0.0, 1.0, 0.0);
    glVertex3f(0.5, 0.0, -0.5);
    // Side 2 
    glVertex3f(0.5, 0.0, -0.5);
    glVertex3f(0.0, 1.0, 0.0);
    glVertex3f(0.5, 0.0, 0.5);
    // Side 3 
    glVertex3f(0.5, 0.0, 0.5);
    glVertex3f(0.0, 1.0, 0.0);
    glVertex3f(-0.5, 0.0, 0.5);
    // Side 4 
    glVertex3f(-0.5, 0.0, 0.5);
    glVertex3f(0.0, 1.0, 0.0);
    glVertex3f(-0.5, 0.0, -0.5);
    glEnd();
    glPopMatrix();

	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//bench1
	//tabletop1
	glPushMatrix();
	glColor3f(0.54, 0.40, 0.2);
	glTranslatef(1.0,0.6,1.0);
	glScalef(1.0,0.05,0.65);
	glutSolidCube(1.0);
	glPopMatrix();

	//tableleg1
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.465,0.35,1.30);
	glScalef(0.03,0.50,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg2
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.465,0.35,0.69);
	glScalef(0.03,0.50,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg3
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.35,0.69);
	glScalef(0.03,0.5,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg4
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.35,1.30);
	glScalef(0.03,0.50,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	///////////////////
	//benchfront
	glPushMatrix();
	glColor3f(0.54, 0.40, 0.2);
	glTranslatef(1.0,0.3,0.40);
	glScalef(1.0,0.02,0.25);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg1
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.48,0.20,0.50);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg2
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.48,0.20,0.30);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg3
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.2,0.30);
	glScalef(0.03,0.2,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg4
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.20,0.50);
	glScalef(0.03,0.2,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
    /////////////////
	//benchback
	glPushMatrix();
	glColor3f(0.54, 0.40, 0.2);
	glTranslatef(1.0,0.3,1.55);
	glScalef(1.0,0.02,0.25);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg1
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.48,0.20,1.65);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	//tableleg2
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.48,0.20,1.45);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	
	//tableleg3
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.20,1.45);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	//tableleg4
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.20,1.65);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.465,0.09,0.972);
	glScalef(0.022,0.035,1.385);
	glutSolidCube(1.0);
	glPopMatrix();

	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.1,0.972);
	glScalef(0.022,0.025,1.385);
	glutSolidCube(1.0);
	glPopMatrix();

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//bench2
	//tabletop1
	glPushMatrix();
	glColor3f(0.54, 0.40, 0.2);
	glTranslatef(1.0,0.6,-1.0);
	glScalef(1.0,0.05,0.65);
	glutSolidCube(1.0);
	glPopMatrix();

	//tableleg1
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.465,0.35,-1.30);
	glScalef(0.03,0.50,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg2
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.465,0.35,-0.69);
	glScalef(0.03,0.50,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg3
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.35,-0.69);
	glScalef(0.03,0.5,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg4
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.35,-1.30);
	glScalef(0.03,0.50,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	///////////////////
	//benchfront
	glPushMatrix();
	glColor3f(0.54, 0.40, 0.2);
	glTranslatef(1.0,0.3,-0.40);
	glScalef(1.0,0.02,0.25);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg1
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.48,0.20,-0.50);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg2
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.48,0.20,-0.30);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg3
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.2,-0.30);
	glScalef(0.03,0.2,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg4
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.20,-0.50);
	glScalef(0.03,0.2,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
    /////////////////
	//benchback
	glPushMatrix();
	glColor3f(0.54, 0.40, 0.2);
	glTranslatef(1.0,0.3,-1.55);
	glScalef(1.0,0.02,0.25);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg1
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.48,0.20,-1.65);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	//tableleg2
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.48,0.20,-1.45);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	
	//tableleg3
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.20,-1.45);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	//tableleg4
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.20,-1.65);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(1.465,0.09,-0.972);
	glScalef(0.022,0.035,1.385);
	glutSolidCube(1.0);
	glPopMatrix();

	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(0.52,0.1,-0.972);
	glScalef(0.022,0.025,1.385);
	glutSolidCube(1.0);
	glPopMatrix();





	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Bench3
	//tabletop1
	glPushMatrix();
	glColor3f(0.54, 0.40, 0.2);
	glTranslatef(-1.0,0.6,-1.0);
	glScalef(1.0,0.05,0.65);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg1
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.465,0.35,-1.30);
	glScalef(0.03,0.50,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg2
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.465,0.35,-0.69);
	glScalef(0.03,0.50,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg3
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.35,-0.69);
	glScalef(0.03,0.5,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg4
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.35,-1.30);
	glScalef(0.03,0.50,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	///////////////////
	//benchfront
	glPushMatrix();
	glColor3f(0.54, 0.40, 0.2);
	glTranslatef(-1.0,0.3,-0.40);
	glScalef(1.0,0.02,0.25);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg1
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.48,0.20,-0.50);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg2
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.48,0.20,-0.30);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg3
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.2,-0.30);
	glScalef(0.03,0.2,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg4
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.20,-0.50);
	glScalef(0.03,0.2,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
    /////////////////
	//benchback
	glPushMatrix();
	glColor3f(0.54, 0.40, 0.2);
	glTranslatef(-1.0,0.3,-1.55);
	glScalef(1.0,0.02,0.25);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg1
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.48,0.20,-1.65);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	//tableleg2
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.48,0.20,-1.45);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	
	//tableleg3
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.20,-1.45);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	//tableleg4
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.20,-1.65);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.465,0.09,-0.972);
	glScalef(0.022,0.035,1.385);
	glutSolidCube(1.0);
	glPopMatrix();

	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.1,-0.972);
	glScalef(0.022,0.025,1.385);
	glutSolidCube(1.0);
	glPopMatrix();


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Bench4
	//tabletop1
	glPushMatrix();
	glColor3f(0.54, 0.40, 0.2);
	glTranslatef(-1.0,0.6,1.0);
	glScalef(1.0,0.05,0.65);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg1
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.465,0.35,1.30);
	glScalef(0.03,0.50,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg2
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.465,0.35,0.69);
	glScalef(0.03,0.50,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg3
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.35,0.69);
	glScalef(0.03,0.5,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg4
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.35,1.30);
	glScalef(0.03,0.50,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	///////////////////
	//benchfront
	glPushMatrix();
	glColor3f(0.54, 0.40, 0.2);
	glTranslatef(-1.0,0.3,0.40);
	glScalef(1.0,0.02,0.25);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg1
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.48,0.20,0.50);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg2
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.48,0.20,0.30);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg3
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.2,0.30);
	glScalef(0.03,0.2,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg4
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.20,0.50);
	glScalef(0.03,0.2,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
    /////////////////
	//benchback
	glPushMatrix();
	glColor3f(0.54, 0.40, 0.2);
	glTranslatef(-1.0,0.3,1.55);
	glScalef(1.0,0.02,0.25);
	glutSolidCube(1.0);
	glPopMatrix();
	//tableleg1
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.48,0.20,1.65);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	//tableleg2
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.48,0.20,1.45);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();
	
	//tableleg3
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.20,1.45);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	//tableleg4
	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.20,1.65);
	glScalef(0.03,0.20,0.03);
	glutSolidCube(1.0);
	glPopMatrix();

	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-1.465,0.09,0.972);
	glScalef(0.022,0.035,1.385);
	glutSolidCube(1.0);
	glPopMatrix();

	glPushMatrix();
	glColor3f(0.112,0.101,0.63);
	glTranslatef(-0.52,0.1,0.972);
	glScalef(0.022,0.025,1.385);
	glutSolidCube(1.0);
	glPopMatrix();

	glFlush();
	glutSwapBuffers();
}


void keys(unsigned char k, int x, int y)
{
if(k=='x')eye[0]+=0.1;
if(k=='X')eye[0]-=0.1;
if(k=='y')eye[1]+=0.1;
if(k=='Y')eye[1]-=0.1;
if(k=='z')eye[2]+=0.1;
if(k=='Z')eye[2]-=0.1;
display();
}

void myReshape(int w, int h)
{
	glViewport(0,0,w,h);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	if(w<h)
		gluPerspective(60,(GLfloat)h/(GLfloat)w,2.0,50.0);
	else
		gluPerspective(60,(GLfloat)w/(GLfloat)h,2.0,50.0);
	glMatrixMode(GL_MODELVIEW);

}

void main()
{
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH); 
	glutInitWindowSize(1000, 1000);
	glutCreateWindow("BLUE SHED");
	glutDisplayFunc(display);
	glutKeyboardFunc(keys);
	glEnable(GL_DEPTH_TEST);
	glutReshapeFunc(myReshape); 
	glutMainLoop();
}