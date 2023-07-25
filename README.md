# Proximal Policy Optimization (PPO) for Gym Super Mario Bros

By using Proximal Policy Optimization (PPO) algorithm introduced in the paper **Proximal Policy Optimization Algorithms** [paper](https://arxiv.org/abs/1707.06347), we've trained a Mario playing agent in gym environment.

With the script, you can **Test the model** through `python test.py`. e.g. `python test.py --world 1 --stage 2`.

**Note**: If the render is too fast, append `env.render()` in **test.py** with `time.sleep(0.5)`. It is recommended to use gym environment that supports old step-API as well.

Here's the colab notebooks of algorithms that we tried earlier:
* [duel DQN](https://colab.research.google.com/drive/1N2DSl8mbCkk6jfWbc1LNk9DnV4aQ4S02?usp=sharing)
* [DQN](https://colab.research.google.com/drive/12qgT44ga8cCsMlW8QT4hbWlquCHm4SuS?usp=sharing)
* [DDQN](https://colab.research.google.com/drive/1p0vAZvbjvMyUlE-6xB-nlkX4yH7mp3hf?usp=sharing)
* [NEAT](https://github.com/SanjanaReddy2005/neat-mario)

**P.S.** If we had more time, we’d have gone with a single model that can play all levels. Our current model doesn’t perform well on unseen levels. We tried running the model for world 2 stage 3 on world 1 stage 1 and since it has never seen a pipe before, it gets stuck.
