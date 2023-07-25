# Proximal Policy Optimization (PPO) for Gym Super Mario Bros

By using Proximal Policy Optimization (PPO) algorithm introduced in the paper **Proximal Policy Optimization Algorithms** [paper](https://arxiv.org/abs/1707.06347), we've trained a Mario playing agent in gym environment.
With the script, you can **Test the model** through `python test.py`. e.g. `python test.py --world 1 --stage 2`.

**Note**: If the render is too fast, append `env.render()` in **test.py** with `time.sleep(0.5)`. It is recommended to use gym environment that supports old step-API as well.

P.s.: We shared our work of algorithms that we tried earlier in the report.
