from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout
from bson import ObjectId
from datetime import timedelta

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(_id=ObjectId(), username='testuser', email='test@example.com', password='testpass')
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.email, 'test@example.com')

class TeamModelTest(TestCase):
    def test_create_team(self):
        user = User.objects.create(_id=ObjectId(), username='testuser', email='test@example.com', password='testpass')
        team = Team.objects.create(_id=ObjectId(), name='Test Team')
        team.members.add(user)
        self.assertEqual(team.name, 'Test Team')
        self.assertIn(user, team.members.all())

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        user = User.objects.create(_id=ObjectId(), username='testuser', email='test@example.com', password='testpass')
        activity = Activity.objects.create(_id=ObjectId(), user=user, activity_type='Running', duration=timedelta(hours=1))
        self.assertEqual(activity.activity_type, 'Running')
        self.assertEqual(activity.user, user)

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        user = User.objects.create(_id=ObjectId(), username='testuser', email='test@example.com', password='testpass')
        leaderboard = Leaderboard.objects.create(_id=ObjectId(), user=user, score=100)
        self.assertEqual(leaderboard.score, 100)
        self.assertEqual(leaderboard.user, user)

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout.objects.create(_id=ObjectId(), name='Test Workout', description='Test Description')
        self.assertEqual(workout.name, 'Test Workout')
        self.assertEqual(workout.description, 'Test Description')
