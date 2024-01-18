---
layout: page
title: Projects
category: project
---

## Table of Contents

- [VR Mech Game](#vr-mech-game)
- [PTG Scroller](#ptg-scroller)
- [Titan Rover](#titan-rover)

# VR Mech Game

Info Coming Soon

# PTG Scroller

PTG Scroller is an Terminal User Interface (TUI) e-reader library for reading .scrl ("Scroll") files using Balázs Cene's Python TUI framework PyTermGUI.

- [Documentation](http://ptgscroller.seandelcastillo.com/)
- [Repository](https://github.com/sean-delcastillo/PTGScroller)

# Titan Rover

The Titan Rover is California State University, Fullerton's submission to the [Mars Society's University Rover Challenge (URC)](https://urc.marssociety.org/).
The Titan Rover is a remotely operated rover platform fit to accomplish tasks to assist astronauts in difficult Martian terrain.

The Autonomous section was formed to complete the Autonomous Navigation Mission [(URC2023 1e)](https://urc.marssociety.org/home/requirements-guidelines) with the following requirements:

1. Rover must be able to autonomously navigate in up to moderate terrain to locations marked by Global Navigation Satellite Systems (GNSS) coordinates or by [Aruco](https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html) fiducial markers in two configurations:
   - Single post
   - Two posts placed two meters apart to form a gate
2. A navigation mission consists of three single posts and a gate. The Rover is given GNSS coordinates in proximity of these markers and must be able to search the vicinity to find the fiducial markers and navigate to them. A marker is reached when:
   - For single posts: rover stops within two meters
   - For a gate: rover fully passes between both posts
3. The Rover must be able to detect when a marker is reached.
