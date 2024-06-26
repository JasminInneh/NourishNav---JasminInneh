"""empty message

Revision ID: e4f0dfbc20ad
Revises: 
Create Date: 2024-03-30 18:37:07.202026

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e4f0dfbc20ad'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('recipe',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=60), nullable=True),
    sa.Column('subtitle', sa.String(length=60), nullable=True),
    sa.Column('desc', sa.String(length=60), nullable=True),
    sa.Column('img_url', sa.String(length=60), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('name', sa.String(length=60), nullable=True),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.Column('height', sa.String(length=20), nullable=False),
    sa.Column('weight', sa.Integer(), nullable=True),
    sa.Column('activity_level', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('recipe')
    # ### end Alembic commands ###
